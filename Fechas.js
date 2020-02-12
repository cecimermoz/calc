function isLeapYear(year) {
    let answer;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        answer = true;
    } else {
        answer = false;
    }
    return(answer);
}

function getYearDays(year){
	if(isLeapYear(year)){return(366);}
	else{return(365);}
}

function getMonthDays(month,year){
	switch(month) {
	  	case 1:
	  	case 3:
	  	case 5:
	  	case 7:
	  	case 8:
	  	case 10:
	  	case 12:
	    	return(31);
	    break;
	  	case 4:
	  	case 6:
	  	case 9:
	  	case 11:
	    	return(30);
	    break;
    	case 2:
    		if(isLeapYear(year)){return(29);}
    		else{return(28)};
    	break;
	  	default:
	  	console.log("a");
	  	break;
	}
}




function  getDaysTill(monthFrom,year){
	var Days 0;
	for(x=monthFrom;x<=12;x++){
		Days += getMonthDays(x,year);
	}
	return(Days);
}


function  getDaysTo(monthTo,year){
	var Days 0;
	for(x=12;x>=monthTo;x--){
		Days += getMonthDays(x,year);
	}
	return(Days);
}




function getDateDays(monthFrom,yearFrom,monthTo,yearTo){
	var YearDiference = yearTo - yearFrom;
	var Days=0;
	for(x=yearFrom;x<=yearTo;x++){
		Days += getYearDays(x);
	}
	return(Days);
}