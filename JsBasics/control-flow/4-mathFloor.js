// Speed Limit = 70
// 5 over 70 => 1 point
// 12 points => suspended

checkSpeed(76)  //Points 1

function checkSpeed(speed)
{
    let speedLimit = 70;
    let mphOverPerPoint = 5;

    if (speed <= 70 + mphOverPerPoint) {
        console.log('OK driving within the speed limit');
        return;
    }
    
    const points = Math.floor((speed - speedLimit) / mphOverPerPoint)

    if (points > 12) 
        console.log('Suspended for having over 12 points'); 
    else console.log('Points ' + points);         
    
}