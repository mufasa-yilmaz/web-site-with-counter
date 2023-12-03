let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

// Her bir butonun tıklama olayına özel işlev atanmıştır.[0],[1],[2].

btn[0].onclick=function(){
    // Ürün görselini "image1.png" olarak değiştir.
    productImg.src="image1.png"; 
    // Tum butonlarin active ozelligini kaldir
    for(button of btn){
        button.classList.remove("active");
    }
    // Tıklanan butona "active" sınıfını ekle.
    this.classList.add("active");
}
btn[1].onclick=function(){
    productImg.src="image2.png";
    // btn bir classtir for...of dongusu de bu class icinde ki degerleri(button veya bambaska bir isimde olabilir kod okunurlugu acisinda button denildi)tek tek gezmemizi saglar
    for(button of btn){
        button.classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick=function(){
    //src, HTML <img> etiketinin bir özelliğidir. 
    // belirli bir resmin dosya yolunu veya URL'sini belirtir ve sayfanın tarayıcı tarafından yüklenip görüntülenmesini sağlar.
    productImg.src="image3.png";

    for(button of btn){
        button.classList.remove("active");
    }
    this.classList.add("active");
}

//sayi degerinin sifirin altina inmemesini saglar.
function checkMinValue() {
    var numberInput = document.getElementById("myNumberInput");
    
    // Sayısal değeri al
    var currentValue = parseInt(numberInput.value);

    // 0'ın altına düşmemesi için kontrol et
    if (currentValue < 0) {
        // Sayıyı 0 olarak ayarla
        numberInput.value = 0;
    }
}
//dark mode


var icon =document.getElementById("icon")
icon.onclick= function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="sun.png";
    }else{
        icon.src= "moon.png";
    }
}



//slider
const carousel = new bootstrap.Carousel('#myCarousel')








