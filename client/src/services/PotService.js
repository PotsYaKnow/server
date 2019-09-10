import Api from '@/services/Api'

export default {
  createPot(newPot) {
    return Api().post('pot', newPot)
  },
  getAllPots() {
    return Api().get('pot')
  },

  getAllPotStatuses() {
    return Api().get('potStatus')
  },
  getPotHistory(potId) {
    return Api().get(`pot/history/${potId}`, potId)
  },
  getPot(potId) {
    return Api().get(`pot/${potId}`, potId)
  },
  editPot(pot) {
    return Api().put(`pot/${pot.id}`, pot)
  }
}
