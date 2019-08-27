import Api from '@/services/Api'

export default {
  createPot(newPot) {
    return Api().post('pot', newPot)
  },
  getAllPots() {
    return Api().get('pot')
  },

  getAllPotStatuses(){
    return Api().get('potStatus')
  },

  getPot(potId){
    return Api().get(`pot/${potId}`, potId)
  }
}
