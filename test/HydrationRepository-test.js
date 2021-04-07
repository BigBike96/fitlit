const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');

const HydrationRepository = require('../src/HydrationRepository');

describe('HydrationRepository', () => {
  let hydrationRepository;

  beforeEach(() => {
    hydrationRepository = new HydrationRepository(sampleData.sampleHydration);
  });

  it('should instantiate a Hydration Repository', () => {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });

  it('should find a user hydration using id', () => {
    expect(hydrationRepository.findUsersHydrationData).to.be.a('function');
    expect(hydrationRepository.findUsersHydrationData(3)).to.deep.equal([{
        "userID": 3,
        "date": "2019/06/15",
        "numOunces": 3
      },
      {
        "userID": 3,
        "date": "2019/06/16",
        "numOunces": 6
      },
      {
        "userID": 3,
        "date": "2019/06/17",
        "numOunces": 9
      }
    ]);
  });

  it('should return a single days ounces for user', () => {
    expect(hydrationRepository.returnDaysOunces(3, "2019/06/17")).to.equal(9);
  });

  it('should return average fluid ounces consumed all time for user', () => {
    expect(hydrationRepository.calculateAllTimeOunces(3)).to.equal(6);
  });

  it('should return ounces each day for the week', () => {
    expect(hydrationRepository.returnWeeksOunces(1, "2019/06/22")).to.deep.equal([{
        userID: 1,
        date: '2019/06/16',
        numOunces: 4
      },
      {
        userID: 1,
        date: '2019/06/17',
        numOunces: 7
      },
      {
        userID: 1,
        date: '2019/06/18',
        numOunces: 10
      },
      {
        userID: 1,
        date: '2019/06/19',
        numOunces: 12
      },
      {
        userID: 1,
        date: '2019/06/20',
        numOunces: 14
      },
      {
        userID: 1,
        date: '2019/06/21',
        numOunces: 16
      },
      {
        userID: 1,
        date: '2019/06/22',
        numOunces: 18
      }
    ]);
  });
});
