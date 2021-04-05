// hydration repository
const chai = require('chai');
const expect = chai.expect;
const sampleData = require('../test/sampleData');

const HydrationRepository = require('../src/HydrationRepository');

describe('HydrationRepository', () => {
  let hydrationRepository;

  beforeEach(() => {
    hydrationRepository = new HydrationRepository(sampleData);
  });


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

   // it('should return ounces for every day of a week', () => {
   //   //we will use user 1 sample data for this test
   //   expect(hydrationRepository.returnWeeksOunces(1, "2019/06/15")).to.deep.equal(
   //     [1, 4, 7, 10, 12, 14, 16]
   //   );
   // });

   it('should return ounces each day for the week', () => {
     expect(hydrationRepository.returnWeeksOunces(1, "2019/06/22")).to.deep.equal({
       4 : '2019/06/16',
       7 : '2019/06/17',
       10 : '2019/06/18',
       12 : '2019/06/19',
       14 : '2019/06/20',
       16 : '2019/06/21',
       18 : '2019/06/22'
     });
   });



});
