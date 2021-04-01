// hydration repository
const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');

const HydrationRepository = require('../src/HydrationRepository');

describe('HydrationRepository', () => {
  let hydrationRepository;

  beforeEach(() => {
    hydrationRepository = new HydrationRepository(sampleData);
    // hydrationRepository1 = new HydrationRepository(sampleData.sampleHydration[1]);
  });


  // 2. returnDaysOunces()
  // -returns only the ounces for 1 specific day

  // 3. calculateAllTimeOunces()
  // -has an array of hydro data that all shares same id
  // -adds every day's fluid ounces
  // -returns that total/sum devided by the length of the array (every day associated with that user)


  it('should instantiate a Hydration Repository', () => {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });

  it('should find a user hydration using id', () => {
    expect(hydrationRepository.findUsersHydrationData).to.be.a('function');
    expect(hydrationRepository.findUsersHydrationData(3)).to.deep.equal(
      [{"userID": 3, "date": "2019/06/15","numOunces": 3},
      {"userID": 3,"date": "2019/06/16","numOunces": 6},
      {"userID": 3,"date": "2019/06/17","numOunces": 9}]
    );
   });

   it('should return a single days ounces for user', () => {
     expect(hydrationRepository.returnDaysOunces(3, "2019/06/17")).to.equal(9);
   });

   it('should return average fluid ounces consumed all time for user', () => {
     expect(hydrationRepository.calculateAllTimeOunces(3)).to.equal(6);
   });

   // it.skip('should', () => {
   //   expect(hydrationRepository.).to.
   // });

});
