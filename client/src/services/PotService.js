import Api from '@/services/Api'

export default {
  create(newPot) {
    return Api().post('pot', newPot)
  },
  getAllPots(searchParams) {
    return Api().get('pot', {
      params: {
        search: searchParams
      }
    })
  },
  getPot(potId) {
    return Api().get(`pot/${potId}`, potId)
  },
  editPot(pot) {
    return Api().put(`pot/${pot.id}`, pot)
  },
  deletePot(potId) {
    return Api().delete(`pot/${potId}`)
  }
}
