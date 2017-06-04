// while loop
var i = 0
while (i < 6){
	console.log(i);
	i++
}

// for loop
// var should be in.
for (var i = 0; i<6; i++){
	console.log(i)
}

// function
function square(x){
	return x*x;
}

console.log(square(10));
console.log(square(1.4));

function isRainy(rainy, umbrella){
    
    if ((rainy == true) && (umbrella == true))
    {
        return "You are in Cali!";
    }
    else if ((rainy == false) && (umbrella == true))
    {
        return "Why'd you bring your umbrella? ";
    }
    
    else
    {
        return "It's rainy, fool!";
    }
    
    
    
}

console.log(isRainy(false, false));
