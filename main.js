//a

// var age = +prompt ("enter your age:")
// if ( age > 0 && age <= 18) {
//     alert( " Вы еще молоды, Вам нужно учиться ")
// } else if (age > 18 && age <=50){
//     alert( "Вы еще молоды, Вам нужно учиться")
// } else if (age > 50 && age <= 59) {
//    alert ("Вам скоро на пенсию")
// } else if ( age > 59 && age<= 100) {
//     alert ("Вы пенсионер")
// } else {
//     alert ("что-то не так")
// }

//b

//  switch (time) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//         alert( time + " часа ночи");
//         break;
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         alert (time + " часов утра");
//         break;
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:  
//         alert (time + " часов дня");
//         break;
//     case 18:
//     case 19:
//     case 20:
//     case 21:
//     case 22:
//     case 23:
//         alert (time + " часов вечера ");
//         break;
//     default:
//         alert ("something is wrong")

//  }

 //c
 var one = +prompt( "Enter the 1st number" );
 var two = +prompt( "Enter the 2nd number" );
 var three = +prompt( "Enter the 3rd number" );

 if ((two>one && two<three)|| (two<one && two>three)){
    alert( two + " среднее число")
 } else if ((one>two && one<three) || (one<two && one>three )){
    alert (one + " среднее число")
 } else if ((three<two && three>one )|| (three<one && three>two)) {
    alert (three+ " среднее число")
 } else {
    alert(" нет среднего числа")
 }