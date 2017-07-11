export default class User {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.username = `firstName lastName`
    this.id = 'xxx'
  }

  static findByCerdentials(login, pwd) {
    if (login == 'bob' && pwd == 'dylan') {
      return new this('Bob', 'Dylan')
    }
  }

  static findByAuthToken(token) {
    if (token == 'userToken') {
      return new this('Bob', 'Dylan')
    }
  }

  static findById(id) {
    return new this('Bob', 'Dylan')
  }
}
