/*
    Bir Öğrencinin bilgilerini alıp notunu hesaplayan programı yapalım.

    ** Ad Giriniz (ad)
    ** Numara Giriniz (ogrno)
    ** Cinsiyet Giriniz (cinsiyet)
    ** Ders Adı Giriniz (ders)
    ** 1.Yazılı Notu (Not1)
    ** 2.Yazılı Notu (Not2)
    ** Ortalama Hesapla Ve Console Yazdır.

*/

    var ad,ogrno,cinsiyet,ders,not1,not2,ort;

    ad = prompt("Ad Giriniz : ");
    ogrno = prompt("Öğrenci Numaranızı Giriniz : ");
    cinsiyet = prompt("Cinsiyetiniz Nedir : ");
    ders = prompt("Ders Giriniz : ");
    not1 = prompt("1.Sınav Notu Giriniz : ");
    not2 = prompt("2.Sınav Notu Giriniz : ");
    ort = (Number(not1) + Number(not2))/2;

    console.log(ad+' '+ogrno+' '+cinsiyet+' '+ders+' '+not1+' '+not2+' '+ort);

