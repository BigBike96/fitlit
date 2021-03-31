// user repo test   //
const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');

describe('UserRepository', () => {
  let userRepository;

  beforeEach(() => {
    userRepository = new UserRepository(
      [{
          "id": 1,
          "name": "Luisa Hane",
          "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
          "email": "Diana.Hayes1@hotmail.com",
          "strideLength": 4.3,
          "dailyStepGoal": 10000,
          "friends": [16, 4, 8]
        },
        {
          "id": 2,
          "name": "Jarvis Considine",
          "address": "30086 Kathryn Port, Ciceroland NE 07273",
          "email": "Dimitri.Bechtelar11@gmail.com",
          "strideLength": 4.5,
          "dailyStepGoal": 5000,
          "friends": [9, 18, 24, 19]
        }
      ]
    );
  });

  it('should take in all user data', () => {
    expect(userRepository.users[0]["id"]).to.equal(1);
    expect(userRepository.users[1]["id"]).to.equal(2);
  });

  it('should find a user by ID', () => {
    expect(userRepository.findUserById(1)).to.deep.equal(userRepository.users[0]);
    // const userID = userRepository.findUserById(1);
    // expect(userID).to.deep.equal(userRepository.users[0]);
  });

  it('should calculate the average of all users step goals', () => {
    expect(userRepository.calculateAvgStepGoals()).to.equal(7500);
  });

});
