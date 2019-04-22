// Code your solution in this file!
function distanceFromHqInBlocks(num){
  return Math.abs(num - 42);
}

function distanceFromHqInFeet(num){
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(start, dest){
  return Math.abs(start - dest) * 264;
}

function calculatesFarePrice(start, dest){
  let total = 0;
  let distance = distanceTravelledInFeet(start, dest);
  if (distance > 2500){
    return 'cannot travel that far'
  } else if (distance < 400 ){
    return total;
  } else if (distance > 2000){
    total += 25;
  } else {
    total = (distance - 400)/50
  }

  return total;
}
