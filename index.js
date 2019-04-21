// Code your solution in this file!
function distanceFromHqInBlocks(numBlocks) {
let block
  if (numBlocks >= 42) {
    block = numBlocks - 42
    return block
  } else if (numBlocks <= 42) {
    block =  42 - numBlocks
    return block
  }
}

function distanceFromHqInFeet(numBlocks){
  let block = distanceFromHqInBlocks(numBlocks) * 264
  return block
}

function distanceTravelledInFeet(from, to){
  let feet
  let feetTo = distanceFromHqInFeet(to)
  let feetFrom = distanceFromHqInFeet(from)
  if (feetFrom > feetTo){
    feet = feetFrom - feetTo
    return feet
  } else {
  feet =  feetTo - feetFrom
    return feet
  }
}




function calculatesFarePrice(from, to){
  let distance = distanceTravelledInFeet(from, to)
    let price
  if (distance < 400){
    return price = 0
  }else if (distance > 400 && distance < 2000 ) {
    distance -= 400
    price = distance * 0.02
    return price
  }else if (distance > 2000 && distance < 2500 ){
    price =  25
    return price
  }else{
    return 'cannot travel that far'
  }




}
