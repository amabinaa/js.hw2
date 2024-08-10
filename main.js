a

var age = +prompt ("enter your age:")
if ( age > 0 && age <= 18) {
    alert( " Вы еще молоды, Вам нужно учиться ")
} else if (age > 18 && age <=50){
    alert( "Вы еще молоды, Вам нужно учиться")
} else if (age > 50 && age <= 59) {
   alert ("Вам скоро на пенсию")
} else if ( age > 59 && age<= 100) {
    alert ("Вы пенсионер")
} else {
    alert ("что-то не так")
}

b

let time = +prompt("Введмие время")

 switch (true) {
      case (time >= 0 && time <= 6):
         message = time + " часа ночи";
         alert(message)
         break;
     case (time >= 7 && time <= 10):
         message = time + " часов утра";
         alert(message)
         break;
     case (time >= 11 && time <= 17):
      time = time - 12
         message = time + " часов дня";
         alert(message)
         break;
     case (time >= 18 && time <= 23):
      time = time - 12
         message = time + " часов вечера";
         alert(message)
         break;
 }

c

var one = +prompt("Enter the 1st number");
var two = +prompt("Enter the 2nd number");
var three = +prompt("Enter the 3rd number");

if ((two > one && two < three) || (two < one && two > three)) {
    alert(two + " среднее число")
} else if ((one > two && one < three) || (one < two && one > three)) {
    alert(one + " среднее число")
} else if ((three < two && three > one) || (three < one && three > two)) {
    alert(three + " среднее число")
} else {
    alert(" нет среднего числа")
}
