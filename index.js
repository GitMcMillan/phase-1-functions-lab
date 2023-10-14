// Code your solution in this file!

const hq = 42

function distanceFromHqInBlocks(pickUp) {
  //returns the number of blocks given a value

  return hq > pickUp ? hq - pickUp : pickUp - hq
};

//distanceFromHqInFeet: Returns the number of feet from Scuber's headquarters to the pickup location. Use your distanceFromHqInBlocks function to help return the correct value here. Try something like this:
function distanceFromHqInFeet(pickUp) {
  return distanceFromHqInBlocks(pickUp) * 264
};


function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  let feetDistance = start > destination ? start - destination :
    destination - start;
  return feetDistance * 264
};

// calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare of $25 for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) return 0;
  if (distance > 400 && distance <= 2000)
    return (distance - 400) * .02;
  if (distance > 2000 && distance <= 2500) return 25;
  if (distance > 2500) return `cannot travel that far`;

};