const Studios = require('../models/UserStudiosFactory')
const Promise = require('bluebird')
const cloudinary = Promise.promisifyAll(require('cloudinary').v2)
const config = require('../config/config')

cloudinary.config({
    cloud_name: config.cloudinary.name,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.secret
});


module.exports = {
    async all (req, res) {
        try {
            const studios = await new Studios().byUserId(req.user.id)

            studios.forEach(function(studio)
            {
        const photo_url = cloudinary.url(studio.photo, {
                    transformation: [
                        { crop: "fill" },
                        { width: "auto", dpr: "auto", crop: "scale" }
                    ]
                })
                studio.photo = photo_url
            })
            res.send(studios)
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred while trying to fetching all Studios'
            })
        }
    },
    async get(req, res) {
        try {

            const studio = await new Studios().byId(req.params.id)

            const photo_url = cloudinary.url(studio.photo, {
                transformation: [
                    { crop: "fill" },
                    { width: "auto", dpr: "auto", crop: "scale" }
                ]
            })
            studio.photo = photo_url
            res.send(studio)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'An error occurred while trying to fetching a Studio'
            })
        }
    },
    async create (req, res) {
        try {

            const cloudinaryResult = await cloudinary.uploader.upload(req.formFields.studioPhoto, {
                overwrite: true,
                folder: 'user_' + req.user.id
            });

            const studio = await new Studios().
            create(req.user.id,
                req.formFields.name,
                cloudinaryResult.public_id)


            res.send(studio)
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred while create a studio'
            })
        }
    },
    async edit (req, res) {
        try {
            const studio = await new Studios().edit(req.params.id, req.body.name)
            res.send(studio)
        } catch (err) {

            res.status(500).send({
                error: 'An error occurred while editing a studio'
            })
        }
    },
    async delete (req, res) {
        try {
            const numDeleted = await new Studios().delete(req.params.id)
            res.status(200).send({ 'deletedCount': numDeleted })

        } catch (err) {
            res.status(500).send({
                error: 'An error occurred while deleting a studio'
            })
        }
    }
}
