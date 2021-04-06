// sleep repos test
const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');

const SleepRepository = require('../src/SleepRepository');

describe('SleepRepository', () => {
  let sleepRepository;

  beforeEach(() => {
    sleepRepository = new SleepRepository();
  })

  it('should instantiate SleepRepository', () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository)
  });
  
})
