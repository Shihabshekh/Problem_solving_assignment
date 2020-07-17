// feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}

// woodCalculato
function WoodCalculator(cheir, tabile, bed){
    var woodCountForCheir = cheir * 1;
    var woodCountForTabil = tabile * 3;
    var woodCountForBed = bed * 5 ;
    var totalWood = woodCountForCheir + woodCountForTabil + woodCountForBed ;
    return totalWood ;
}



// brickCalculator
function brickCalculator(building){
    var feetBricks = 1000;
    if (building >= 0 && building <=10){
        var totalFeet = building * 15;
        var totalBricks = (totalFeet * feetBricks);
        return totalBricks;
    }
    else if (building >= 0 && building <= 20){
        var downTenBuildingBricks = 30000;
        var totalFeet = building * 12;
        var totalBricks = (totalFeet * feetBricks) + downTenBuildingBricks;
        return totalBricks;
    }
    else if (building >= 0 && building >= 21){
        var downTenBuildingBricks = 50000;
        var downTenToTwenty = 20000;
        var totalFeet = building *10;
        var extraTotalBricks = downTenBuildingBricks + downTenToTwenty;
        var totalBricks = (totalFeet * feetBricks) + extraTotalBricks;
        return totalBricks;
    }
    else{
        return totalBricks;
    }
}

// tinyFriend
function tinyFriend(name){
    var smallName = name[0];
    for(var i = 0; i < name.length; i++){
        var currentName = name[i];
        if(currentName < smallName){
            smallName = currentName ;
        }
    }
    return smallName;
}











