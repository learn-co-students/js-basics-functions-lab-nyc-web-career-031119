// Code your solution in this file!
const hdSt = 42
const blocksToFeet = (blocks) => { return blocks * 264 }
function diffInBlocks(pickupSt, destination=hdSt) {
  return  pickupSt > destination ?  pickupSt - destination : destination - pickupSt;
}
const distanceFromHqInBlocks = diffInBlocks
function distanceFromHqInFeet(pickupSt){
  return blocksToFeet(distanceFromHqInBlocks(pickupSt))
}

function distanceTravelledInFeet(pickupSt, destination){
  return blocksToFeet(diffInBlocks(pickupSt, destination))
}

function calculatesFarePrice(pickupSt, destination){
  const distance = distanceTravelledInFeet(pickupSt, destination)
  switch (true) {
    case distance <= 400:
      return 0;
    case distance > 400 && distance <= 2000:
      return 0.02 * (distance - 400);
    case distance > 2000 && distance <= 2500:
     return 25;
    case distance > 2500:
    return 'cannot travel that far';
  }
}
