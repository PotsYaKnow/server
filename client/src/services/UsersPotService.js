import Api from '@/services/Api'


export default {
  getAll(searchKey, userId) {
    return Api().get('pot/user', {
      params: {
        search: searchKey,
        userId: userId
      }
    })
  }
}
