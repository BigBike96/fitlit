// user
class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.address = user.address;
    this.email = user.email;
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
    this.friends = user.friends;
  }

  returnFirstName() {
    // returns only the first name of the name string
    const firstName = this.name.split(" ");
    return firstName[0];
  }

  returnFriends(userData) {
    // const friends = this.friends.forEach((element) => {
    //   element.filter(element.userID === id)
    //   console.log(this.friends);
    // });
    console.log("THIS.FRIENDS", this.friends);
    const friendsId = this.friends.map(element => {
    const friendsNames = userData.find(user => user.id === element)

    //return friendsNames
  })
  console.log("NAMES", friendsNames);
  console.log("IDs", friendsId);
  //return friendsId
  }
}


if (typeof module !== 'undefined') {
  module.exports = User;
}
