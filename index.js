// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
  return Math.abs(dist - 42)
}

function distanceFromHqInFeet(dist) {
  let dif = distanceFromHqInBlocks(dist);
  return (dif * 264);
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
