var x = 10;
var y = 20;
var z = 10;

console.log(x+y); // x ve y toplar
console.log(x-y); // x'ten y çıkarır
console.log(x/y); // x'i y böler
console.log(x*y); //x ve y çarpar
console.log(x*y+z); //x ve y çarpar z ekler
console.log(x*(y+z)); // İşlem Önceliğine göre önce y ve z toplar çıkan sonucu x ile çarpar

/*
x++; // x'i 1 arttırır
x--; // x'i 1 eksiltir
x=x+1; // x'e yeni değer olarak s
console.log(x); 
*/

    /* Karşılaştırma Operatörleri */

var sonuc = x>y;
console.log(sonuc);

console.log(x<y);
console.log(x>=y);
console.log(x==y);
console.log(x=="10");
console.log(x==="10");
console.log(x!=z);


    /*Mantıksal Operatörler*/



    /* && (And) Operatörü */

    console.log((20>10) && (30<20)); // Her iki işlemin şartı karşılaması gereklidir   

     /* || (Or)  Operatörü */

    console.log((20>10) && (30<20)); // Yalnızca bir şartın karşılanması yeterlidir   

    /* !  (Not) Operatörü */
 
    console.log(!(x>z)); // Şartın doğruluğunu sorgular

