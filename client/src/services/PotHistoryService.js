import Api from '@/services/Api'

export default {
  getPotHistory(potHistoryId) {
    return Api().get(`history/${potHistoryId}`, potHistoryId)
  },
  editHistory(potHistory) {
    return Api().put(`history/${potHistory.id}`, potHistory)
  },
  deleteHistory(potHistoryId) {
    return Api().delete(`history/${potHistoryId}`)
  }
}
