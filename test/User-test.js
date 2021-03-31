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

  it('should take in a user address', () => {
    expect(user.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
  });

  it('should take in a user email', () => {
    expect(user.email).to.equal("Diana.Hayes1@hotmail.com");
  });

  it('should take in a user stride length', () => {
    expect(user.strideLength).to.equal(4.3);
  });

  it('should take in a user daily step goal', () => {
    expect(user.dailyStepGoal).to.equal(10000);
  });

  it('should take in a user friends', () => {
    expect(user.friends).to.deep.equal([16, 4, 8]);
  });

  it('should return a user first name', () => {
    expect(user.returnFirstName()).to.equal("Luisa");

  });


  // it('should take in correct key values', () => {
  //   expect(user.id).to.equal(1);
  //   expect(user.name).to.equal("Luisa Hane");
  //   expect(user.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
  //   expect(user.email).to.equal("Diana.Hayes1@hotmail.com");
  //   expect(user.strideLength).to.equal(4.3);
  //   expect(user.dailyStepGoal).to.equal(10000);
  //   expect(user.friends).to.deep.equal([16, 4, 8]);
  // });


})
