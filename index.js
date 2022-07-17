// Code your solution in this file!
function distanceFromHqInBlocks(bStart){
    if (bStart > 42)
        return bStart - 42
    else (bStart < 42)
        return 42 - bStart
}

function distanceFromHqInFeet(fStart){
    if (fStart > 42)
        return (fStart-42)*264
    else (fStart < 42)
        return (42-fStart)*264
}

function distanceTravelledInFeet(fLocation, dLocation){
    if (fLocation > dLocation)
        return (fLocation - dLocation)*264
    else (fLocation < dLocation)
        return (dLocation - fLocation)*264
}

function calculatesFarePrice(start, destination){
    let blockDistance = Math.abs(start - destination)
    let distanceTraveled = blockDistance* 264;
    if (distanceTraveled <= 400) {
        console.log("gives customers a free sample");
        return 0;
    }
    else if (distanceTraveled >= 2500) {
        return "cannot travel that far";
    }
    else if (400 < distanceTraveled && distanceTraveled < 2000) {
        let rideCost = (0.02 * (distanceTraveled - 400));
        return rideCost;
    }
    else if (2000 <= distanceTraveled < 2500) {
        return 25;
    }
}