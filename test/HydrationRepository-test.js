// hydration repository
const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');

const HydrationRepository = require('../src/UserRepository');

describe('HydrationRepository', () => {
  let hydrationRepository;

  beforeEach(() => {
    hydrationRepository = new HydrationRepository(sampleData.sampleHydration);
    // hydrationRepository1 = new HydrationRepository(sampleData.sampleHydration[1]);
  });

  // 1. findUsersHydrationDataById -outputs correct User data (all have same id)
  // 2. returnDaysOunces()
  // -returns only the ounces for 1 specific day
  // 3. calculateAllTimeOunces()
  // -has an array of hydro data that all shares same id
  // -adds every day's fluid ounces
  // -returns that total/sum devided by the length of the array (every day associated with that user)


  it('should instantiate a Hydration Repository', () => {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });

});
