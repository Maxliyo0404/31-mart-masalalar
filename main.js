// 8-masala
//   let a = +prompt("a kiriting");
//   let b = +prompt("b kiriting");
//   if (a !== b) {
//      let result = a + b;
//      a = result;
//      b= result;
//     alert("Sonlari har xil" + a );  
//   } else  {
//     a = 0;
//     b = 0;

//     alert( "Sonlari teng" + 0  );
//   }

// 9-masal
// let a = +prompt("a kiriting");
// let b = +prompt("b kiriting");
// let katta = Math.max( a , b);
// if (a !== b) {
//     a = katta;
//     b = katta;
//     alert("har xil: a=" + a +"b=" + b);
// } else {
//     a = 0;
//     b = 0;
//    alert("Teng : a=" + a +"b=" + b);
// }
  
// 10-masala
//  let a = +prompt("a kiriting");
//  let b = +prompt("b kiriting");
//  let c = +prompt("c kiriting");
//  let result = Math.min(a, b, c);
//  console.log(result);

//  if 1-masala
// let a = +prompt("a kiriting");
// let b = +prompt("b kiriting");
// let c = +prompt("c kiriting");
// let katta = Math.max(a, b, c);
// let kichik = Math.min(a, b, c);
// let result = (a + b + c) - (katta + kichik);
// console.log(result);

//  2-masala

// let a = +prompt("a kiriting");
// let b = +prompt("b kiriting");
// let c = +prompt("c kiriting");
// let kichik = Math.min( a, b, c);
// if (kichik === a) {
//     alert(" b + c chiqsin");
// } else if(kichik === b) {
//     alert(" a + c chiqsin");
// }
//  else  {
//     alert(" a + b chiqsin");
// }

// 13-masala

// let a = +prompt("a kiriting");
// let b = +prompt("b kiriting");
// let c = +prompt("c kiriting");
// if (a < b  &&  b < c) {
//     let natija = a * b * c * 2 ;
//     alert("natija ko'paytma:  *  2" + natija);
// } else {
//     let natija = a -b -c;
//     alert("natija ayirma: " + natija);
// }

// 14-masala
// let a = +prompt("a kiriting");
// let b = +prompt("b kiriting");
// let c = +prompt("c kiriting");
// if ((a < b && b < c) || (a > b && b > c)) {
//     let natija = a * b * c * 2 ;
//     alert("natija (ikkilantirildi): "  + natija); 
// } else {
//      let natija = a -b -c;
//      alert("natija (shart bajarilmadi): "  + natija); 
// }
// 15-masala

// let a = +prompt("a kiriting");
// let b = +prompt("b kiriting");
// let c = +prompt("c kiriting");
// let d = +prompt("d kiriting");
// if (a !== b && a !== c) {
//     alert("boshqa sonni tartib raqami : 1");
// } else if(b !== a && b !== c) {
//     alert("boshqa sonni tartib raqami : 2");
// }
//  else if(c !== a && c !== b) {
//     alert("boshqa sonni tartib raqami : 3");
// }
// else{
//     alert("boshqa sonni tartib raqami : 4");
// }
// 16-masala
// let x = +prompt("x  sonini yozing");
// if (x <= 0) {
//     alert(-x);
// } else if(x > 0 && x < 2) {
//     alert (x ** 2);
// }
//  else if(x >= 2) {
//     alert( "4");
// }
// 17-masala

// 18-masala
//  let a = +prompt("a kiriting");
//  if (a >= 1 && a <= 9) {
//     if (a % 2 === 0){
//     alert("1 xonali juft son " );
//  }else{
//     alert("1 xonali toq son");
//  }
// }else if(a >= 10 && a <= 99) {
//     if (a % 2 === 0){
//      alert("2 xonali juft son ");
//  } else{
//     alert("2 xonali toq son");
//  }
// }else if(a >= 100 && a <= 999) {
//     if (a % 2 === 0){
//      alert("3 xonali juft son ");
//  } else{
//     alert("3 xonali toq son");
//  }
// }else{
//     alert("sin 1 va 999 oralig'ida emas")
//  }
 
// case 1-masala
// let baho = +prompt("baho kiriting");
// function natija (baho) {
//     switch (baho){
//         case 1 :
//         console.log("yomon");
//         break ;
//         case 2:
//         console.log("qoniqarsiz");
//         break ;
//         case 3:
//         console.log("qoniqarli");
//         break ;
//         case 4:
//         console.log("yaxshi");
//         break ;
//         case 5:
//         console.log("A'lo");
//         break ;
//         default:
//          console.log("Xato");         
//     }
//     }
//     natija(baho);
// case 2-masala
// let oy = +prompt("oy kiriting");
// function natija (oy) {
//     switch (oy){
//         case 12 :
//         case 1:
//         case 2 :
//         console.log("qish");
//         break ;
//         case 3:
//         case 4:
//         case 5:
//         console.log("bahor");
//         break ;
//         case 6:
//         case 7:
//         case 8:
//         console.log("yoz");
//         break ;
//         case 9:
//         case 10:
//         case 11:
//         console.log("kuz");
//         break ;
//         default:
//          console.log("bunday oy yo'q");         
//     }
//     }
//     natija(oy);
// case 3-masala
// let oyraqam = +prompt("oyraqam kiriting");
// function natija (oyraqam) {
//     switch (oyraqam){
//         case 1 :
//         case 3:
//         case 5 :
//         case 7 :
//         case 8:
//         case 10 :
//         case 12 :
//         console.log("31");
//         break ;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//         console.log("30");
//         break ;
//         case 2:
//         console.log("28");
//         break ;
//         default:
//          console.log("xato oy raqami kiritildi");         
//     }
//     }
//     natija(oyraqam);
// 4-masala
// let birlik = +prompt("birlikni tanlang");
// let uzunlik = +prompt("uzunlikni tanlang");
// function natija (birlik) {
//     switch (birlik){
//         case 1 : // desimetr
//         natija = uzunlik * 0.1; // 1dm = 0.1 metr
//         console.log(uzunlik +  "desimetr ="  + natija  +  "metr");
//         break ;
//         case 2: // kilometr
//         natija = uzunlik * 1000 ; // 1km = 1000 metr
//          console.log(uzunlik + "kilometr =" + natija  +  "metr");
//         break ;
//         case 3: // metr
//             natija = uzunlik; //o'zgarmaydi
//         console.log(uzunlik + "metr = " + natija  +  "metr");
//         break ;
//         case 4: // millimetr
//          natija = uzunlik * 0.001; // 1mm = 0.001 metr
//          console.log(uzunlik + "millimetr =" + natija  +  "metr");
//         break ;
//         case 5: // santimetr
//           natija = uzunlik * 0.01 ; // 1sm = 0.01 metr
//          console.log(uzunlik + "santimetr =" + natija  +  "metr");
//         break ;
//         default:
//          console.log("Xato 1 dan 5 gacham son kiriting");         
//     }
//     }
//     natija(birlik);
// // 5-masala
// let birlik = +prompt("birlikni tanlang");
// let ogirlik = +prompt("ogirlikni tanlang");
// function natija (birlik, ogirlik) {
//     switch (birlik){
//         case 1 : 
//         console.log(ogirlik   + "kg");
//         break ; // milligram
//         case 2: 
//         console.log(ogirlik / 1000000 + "kg");
        
//         break ; // milligram 
//         case 3: 
//           console.log(ogirlik / 1000 + "kg");  
//         break ;  //gramm
//         case 4: 
//        console.log(ogirlik * 1000 + "kg");
//         break ; //tonna
//         case 5: 
//          console.log(ogirlik * 100 + "kg");
//         break ; //senter
//         default:
//          console.log("Xato og'irlik");         
//     }
//     }
//     natija(birlik , ogirlik);
// 6-masala
let D = +prompt("Sana kiriting");
let M = +prompt("Oy kiriting");
function natija (D, M){
    let oynomi;
    switch(M){
        case 1 : oynomi = "Yanvar";
        break ;
        case 2 : oynomi = "Fevral";
        break ;
        case 3 : oynomi = "Mart";
        break ;
        case 4 : oynomi = "Aprel";
        break ;
        case 5 : oynomi = "May";
        break ;
        case 6 : oynomi = "Iyun";
        break ;
        case 1 : oynomi = "Yanvar";
        break ;
        case 1 : oynomi = "Yanvar";
        break ;
        case 1 : oynomi = "Yanvar";
        break ;
        case 1 : oynomi = "Yanvar";
        break ;
        case 1 : oynomi = "Yanvar";
        break ;

    }
}