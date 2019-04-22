// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance < 42) {
    return 42 % distance;
} else {
    return distance  % 42;
  }
};

function distanceFromHqInFeet(distance) {
return distanceFromHqInBlocks(distance) * 264;
};

function distanceTravelledInFeet(arg1, arg2) {
  if (arg1 < arg2) {
    return arg2 % arg1 * 264;
} else {
    return arg1 % arg2 * 264;
  }
};

function calculatesFarePrice(start, destination) {
  const distanceTravelled = distanceTravelledInFeet(start, destination);

if (distanceTravelled < 400) {
    return 0;
} else if (distanceTravelled > 400 && distanceTravelled < 2000) {
    return (distanceTravelled - 400) * 0.02;
} else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
    return 25;
} else if (distanceTravelled > 2500) {
  return 'cannot travel that far';
}



  switch (distanceTravelled) {
    case distanceTravelled < 400:
      return 0;
      break;
    case distanceTravelled > 400 && distanceTravelled < 2000:

      break;
    case distanceTravelled > 2000 && distanceTravelled < 2500:
      return 25;
      break;
    case distanceTravelled > 2500:
      return 'cannot travel that far';
      break;
    default:
      return 'error';
      break;

  }
};
