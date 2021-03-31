// user repository
//

class UserRepository {
  constructor(data) {
    this.users = data;
  }

  findUserById(id) {
    //finds user data by Id
    return this.users.find(user => user.id === id);
    //const targetUser = this.users.findIndex((user) => user.id === userID);
    //return this.users[targetUser];
    //return this.users.findIndex((user) => user.id === userID);
  }

}

module.exports = UserRepository;

// if (typeof module !== 'undefined') {
//   module.exports = someClassName;
// }
