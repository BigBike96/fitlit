// user test //
const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', () => {
  let user;

  beforeEach(() => {
    data = {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [16, 4, 8]
      },
      user = new User(data);
  });

  it('should instantiate a new user', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('should take in a user id', () => {
    expect(user.id).to.equal(1);
  });

  it('should have a name', () => {
    expect(user.name).to.equal("Luisa Hane");
  });

})
