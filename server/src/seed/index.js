const { sequelize, Song, User, Pot Notes, Pot} = require('../models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')
const bookMark = require('./bookmark.json')
const histories = require('./histories.json')


sequelize.sync({ force: true })
    .then(async function () {

        await Promise.all(
            users.map(user => { User.create(user) }))

        await Promise.all(
            songs.map(song => { Song.create(song) }))


        await Promise.all(
            bookMark.map(bookMark => { BookMark.create(bookMark) }))

        await Promise.all(
            histories.map(histories => { Histories.create(histories) }))


    })
