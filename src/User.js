// user
class User {

  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.address = user.address;
  }

  returnFirstName() {
    //returns only the first name of the name string
    //const firstName = this.name.split("")
    //console.log(firstName[0]);
    //return firstName[0];
  }
}

module.exports = User;
