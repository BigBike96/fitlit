// sleep repos test
const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');

const SleepRepository = require('../src/SleepRepository');

describe('SleepRepository', () => {
  let sleepRepository;

  beforeEach(() => {
    sleepRepository = new SleepRepository(sampleData.sampleSleep);
  });

  it('should instantiate SleepRepository', () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('should take in sleep data', () => {
    expect(sleepRepository.sleepData).to.deep.equal(sampleData.sampleSleep);
  });

  it('should find average hours slept per day for user by id', () => {
    expect(sleepRepository.averageSleepHours(3)).to.equal(8.93);
  });

  // it.skip('should' , => {
  //   expect(sleepRepository.averageSleepQuality)
  // });
  //
  // it.skip('', => {
  //   expect()
  // });
  //
  // it.skip('', => {
  //   expect()
  // });
  //
  // it.skip('', => {
  //   expect()
  // });
  //
  // it.skip('', => {
  //   expect()
  // });
  //
  // it.skip('', => {
  //   expect()
  // });
  //
  // it.skip('', => {
  //   expect()
  // });
  //
  // it.skip('', => {
  //   expect()
  // });
})

// const sleepData = [
//   {
//     "userID": 1,
//     "date": "2019/06/15",
//     "hoursSlept": 6.1,
//     "sleepQuality": 2.2
//   },
//   {
//     "userID": 2,
//     "date": "2019/06/15",
//     "hoursSlept": 7,
//     "sleepQuality": 4.7
//   },
//   {
//     "userID": 3,
//     "date": "2019/06/15",
//     "hoursSlept": 10.8,
//     "sleepQuality": 4.7
//   }
// ]
