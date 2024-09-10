// returns the number of blocks
function distanceFromHqInBlocks(block) {
    if (block > 42) {
        return block - 42;
    } else {
        return 42 - block;
    }
}

// returns the number of blocks from 42nd * 264
function distanceFromHqInFeet(blocks) {
    console.log(distanceFromHqInBlocks(blocks) * 264);
    return distanceFromHqInBlocks(blocks) * 264;
}
// distanceFromHqInFeet(43)

// returns the number of blocks * 264
function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = start > destination ? start - destination : destination - start;
    
    // console.log(distanceInBlocks);
    // console.log(distanceInBlocks * 264);
    return distanceInBlocks * 264;
}
// distanceTravelledInFeet(43, 45)

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    // console.log(distanceInFeet);

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        // console.log((distanceInFeet - 400) * 0.02);
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        // console.log(25);
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

// calculatesFarePrice(43, 52)