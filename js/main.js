
"use strict";
var sum=0;
alert('welcomee');
var hello = prompt('please enter your name ');
alert('hello ' + hello);


var cat = prompt('do you think i have a phobia from cats ?');
cat = cat.toLowerCase();
console.log(cat);
if (cat == 'n' || cat == 'no')
    {alert('you got it right ');
    sum=sum+1;}
else
    alert('you got it wrong ')

var favCol = prompt('do you think red is my favorite color ');
favCol = favCol.toLowerCase();
if (favCol == 'y' || favCol == 'yes') { alert('you got it correct');
sum=sum+1; }
else { alert('wrong awnser'); }

var age = prompt('do you think i\'m 23? ');
age = age.toLowerCase();
if (age == 'y' || age == 'yes') { alert('you got it right'); 
sum=sum+1;}
else { alert('wrong '); }

var smart = prompt('do you think im smart ');
smart = smart.toLowerCase();
if (smart == 'y' || smart == 'yes') { alert('you got it correct');
sum=sum+1; }
else { alert('noo wrong'); }


var food = prompt('do i love food? ');
food = food.toLowerCase();
switch (food) {
    //hoon ba7ot bel case small letters la2no hala2 kol shi 7ayd5ol 3aliha 7aykon t7awal la small

    case 'y':
    case 'yes':
        {alert('yes you got it correct');
    sum=sum+1;}
        break;

    case 'n':
    case 'no':
        alert('you got it wrong');
        break;
}

for (var i = 0; i <= 3; i++) {
    var num = prompt('guess a number please');
    if (num == 10) {
        alert('bravoooooo');
        sum=sum+1;
        break;
    }



    else if (num > 10) {
        alert('too high');
    }
    else if (num < 10) {
        alert('too low ');
    }
}
alert('the awnser is 10');

var arr = [2, 4, 6, 8, 10];




    
    
    console.log(oddNum);
    for (var i = 0; i < 5; i++) {
        {
            
            for (var j = 0; j < arr.length; j++) {
                var oddNum = prompt('guess an even number less than 11 and bigger than zero ');
                console.log(arr[i]);
                console.log(i);
                //console(oddNum);
                if (oddNum == arr[i]) {
                    alert('you got it correct');
                    sum=sum+1;
                    break;
                }
                else 
                { alert('you got it wrong'); }
            }break;

            

        }

             




    }
    









alert('you got  ' + sum + '  out of 7');
alert('the possible awnsers is 2 ,4 ,6 ,8 ,10 ');
alert('thank you for visiting ');












