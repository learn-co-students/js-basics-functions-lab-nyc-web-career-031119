function distanceFromHqInBlocks(block){
  return Math.abs(42-block);
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block)*264;
}

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end)*264;
}

function calculatesFarePrice(start, end){
  let distance = distanceTravelledInFeet(start, end);

  switch (true) {
    case distance < 400:
      return 0;
    case distance < 2000:
      return (distance-400) * .02;
    case distance < 2500:
      return 25
    case distance >=2500:
      return 'cannot travel that far';
  }
}
