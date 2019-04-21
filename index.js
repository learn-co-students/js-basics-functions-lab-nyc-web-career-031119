// Code your solution in this file!

function distanceFromHqInBlocks(st) {
  hq = 42
  if (st >hq) {
    answer = st - hq
  }
  else {
    answer = hq - st
  }
  return answer
}

function distanceFromHqInFeet(st) {
  answer = (distanceFromHqInBlocks(st) * 264)
  return answer
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    answer = (start - end) * 264
  }
  else {
    answer = (end - start) * 264
  }
  return answer
}


function calculatesFarePrice(start,end) {
  distance = distanceTravelledInFeet(start, end)
  let response
  
  if (distance < 400) {
    response = 0 
    return response
  }
  else if (distance < 2000) {
    response = (distance-400) * 0.02
      return response;
  }
  else if (distance < 2500){
      response = 25 
      return response
  }
  else if (distance >= 2500) {
    response = 'cannot travel that far'
    return response
  }
  return response
}



