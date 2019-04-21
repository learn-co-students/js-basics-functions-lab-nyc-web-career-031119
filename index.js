// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  if (blocks > 42){
  return blocks - 42;}
  else
  {return 42 - blocks;}
}

function distanceFromHqInFeet (blocks){
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet (blockstart, blockend) {
  if (blockstart < blockend) {
    return (blockend - blockstart) * 264;
    }
  else {
    return (blockstart - blockend) * 264;
  }
}

function calculatesFarePrice(blockstart, blockend) {
  const distance = distanceTravelledInFeet(blockstart, blockend);
  if (distance <= 400){
    return 0;}
  else if (distance > 400 && distance <= 2000){
  return (distance - 400) * .02;}
  else if (distance > 2000 && distance < 2500){
  return 25;}
else {
  return "cannot travel that far";
}
}
