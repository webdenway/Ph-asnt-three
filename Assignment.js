
// ==========================kilometerToMeter=============================



function kilometerToMeter(km){
    if(km>=0){
        var meter = km*1000;
    
    } else {
       return 'Negative number is not allow' 
    }
    return meter;
    
}




// ===============budgetCalculator=================



function budgetCalculator(watch, mobile, laptop){
    var watchPrice= 50;
    var mobilePrice= 100;
    var laptopPrice= 500;
    for (var i = 0; i < arguments.length; i++){
        var count= arguments[i];
        
        // console.log(typeof 'count');
    
        if(count< 0){
          return 'negative number is not allow';
            
        }
      else{
        var totalWatchPrice= watch*watchPrice;
        var totalMobilePrice= mobile*mobilePrice;   
        var totalLaptopPrice= laptop*laptopPrice;
        var total= totalWatchPrice + totalMobilePrice + totalLaptopPrice;  
        }
     
    }
         return total;
}




// =================HotelCost===============



function hotelCost(days){

    if(days<0){
        return "You Entered negative number !"
    }
    else if(days<=10){
        var firstTenDays= 100*days;
        return firstTenDays;
    }
   else if(days>10 && days<=20){
        var secondTenDays = 1000 + 80*(days -10);
        return secondTenDays;
        
    }
     else{
        var remainingDays=1800 + 50*(days-20);
        return remainingDays;
    }

}


// =====================megaFriend==============

function megaFriend(array) {
    var largeName = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > largeName.length) {
            largeName = array[i];
        }
    }
    return largeName;
}
