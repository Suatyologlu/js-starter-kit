var marka = 'Opel';
var model = 'Astra';
var otomatik = 'yes';

/* if/else statement*/ 

// Eğer otomotik değeri yes ise 'araç otomatiktir' değilse 'araç otomatik değildir' yazdırsın
if(otomatik=='yes'){ 
    console.log('araç otomatiktir');
}
else{
    console.log('araç otomatik değildir.');
}

// otomatik true ise araç marka model ve otomatik durumunu yazdırsın
otomatik = true;

if(otomatik){
    console.log(marka+' '+model+' otomatik');
}

/* switch/statement*/

//vites '1' :  Araç manuel
//vites '2' :  Araç otomatik

var vites ='1';

if(vites=='1'){
    console.log('araç manuel');
}else if(vites=='2'){
    console.log('araç otomatik');
}else {
    console.log('Yanlış bir değer');
}



vites ='2';
switch(vites){
    case '1' :
        console.log('araç manuel');
        break;
    case '2' :
            console.log('araç otomotik');
            break;
        default:
            console.log('yanlış değer');
    }








