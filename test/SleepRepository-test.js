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

  it('should find average quality of sleep', () => {
    expect(sleepRepository.averageSleepQuality(3)).to.equal(4.33);
  });

  it('should find how many hours slept for day', () => {
    expect(sleepRepository.hoursForDay(2, "2019/06/21")).to.equal(4.3)
  });

  it('should find quality of sleep rating for day', () => {
    expect(sleepRepository.qualityForDay(2, "2019/06/21")).to.equal(4.8)
  });

  it('should find hours slept each day during week', () => {
    expect(sleepRepository.hoursForWeek(2, "2019/06/21")).to.deep.equal([{
        userID: 2,
        date: '2019/06/15',
        hoursSlept: 7,
        sleepQuality: 4.7
      },
      {
        userID: 2,
        date: '2019/06/16',
        hoursSlept: 7.5,
        sleepQuality: 3.8
      },
      {
        userID: 2,
        date: '2019/06/17',
        hoursSlept: 5.7,
        sleepQuality: 3
      },
      {
        userID: 2,
        date: '2019/06/18',
        hoursSlept: 10.8,
        sleepQuality: 3.2
      },
      {
        userID: 2,
        date: '2019/06/19',
        hoursSlept: 9.6,
        sleepQuality: 2.5
      },
      {
        userID: 2,
        date: '2019/06/20',
        hoursSlept: 10.1,
        sleepQuality: 2.4
      },
      {
        userID: 2,
        date: '2019/06/21',
        hoursSlept: 4.3,
        sleepQuality: 4.8
      }

    ]);
  });

  it('should find quality of sleep for each day during week', () => {
    expect(sleepRepository.qualityForWeek(2, "2019/06/21")).to.deep.equal([{
        userID: 2,
        date: '2019/06/15',
        hoursSlept: 7,
        sleepQuality: 4.7
      },
      {
        userID: 2,
        date: '2019/06/16',
        hoursSlept: 7.5,
        sleepQuality: 3.8
      },
      {
        userID: 2,
        date: '2019/06/17',
        hoursSlept: 5.7,
        sleepQuality: 3
      },
      {
        userID: 2,
        date: '2019/06/18',
        hoursSlept: 10.8,
        sleepQuality: 3.2
      },
      {
        userID: 2,
        date: '2019/06/19',
        hoursSlept: 9.6,
        sleepQuality: 2.5
      },
      {
        userID: 2,
        date: '2019/06/20',
        hoursSlept: 10.1,
        sleepQuality: 2.4
      },
      {
        userID: 2,
        date: '2019/06/21',
        hoursSlept: 4.3,
        sleepQuality: 4.8
      }
    ]);
  });
})
