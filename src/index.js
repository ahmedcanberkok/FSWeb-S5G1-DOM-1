const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const a = document.querySelectorAll("a");

var i = 0;
a.forEach((a) => {
  a.classList.add("italic");
  a.textContent = siteContent.nav["nav-item-" + (i + 1)];
  i++;
});
document.getElementsByTagName("a")[6].classList.remove("italic");
document.getElementsByTagName("a")[6].classList.add("bold");

document
  .querySelector("#logo-img")
  .setAttribute("src", "http://localhost:9000/img/logo.png");
  
document.querySelector("button").textContent = "Başlayın";

document.querySelector("h1").textContent = "Bu DOM Mükemmel";
document
  .querySelector("#cta-img")
  .setAttribute("src", "http://localhost:9000/img/cta.png")


// const firstTextContent = document.querySelector('.text-content');
// const firstBottomContent = document.querySelector('.bottom-content');
// // firstTextContent altındaki h4 elementlerini seçin ve sırayla 1, 2, 3 olarak yazdırın
// firstTextContent.querySelector('h4').textContent = 'Özellikler';
// firstTextContent.nextElementSibling.querySelector('h4').textContent = 'Hakkında';
// firstTextContent.nextElementSibling.nextElementSibling.querySelector('h4').textContent = 'Servisler';
// firstTextContent.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('h4').textContent = 'Ürünler';

const h4Elements = document.querySelectorAll('h4');
const basliklar = ["Özellikler", "Hakkında", "Servisler", "Ürünler", "Vizyon","iletişim"];
let index = 0;
h4Elements.forEach((h4) => {
  h4.textContent = basliklar[index];
  index++;
});
const pElements = document.querySelectorAll('p');
const baslikAciklama = ["Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
 "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", 
 "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", 
 "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", 
 "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
 "100 numara Bilmem ne sokak Ankara'da bir semt,Türkiye",
 "+90 (123) 456-7899", "satis@birsirketsitesi.com.tr"];
let indeks = 0;
pElements.forEach((p) => {
  p.textContent = baslikAciklama[indeks];
  indeks++;
});

document
  .querySelector(".middle-img")
  .setAttribute("src", "http://localhost:9000/img/accent.png");

//  const pElementss = document.querySelectorAll('p');
//  const contactAciklama = ["100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
//  "+90 (123) 456-7899", "satis@birsirketsitesi.com.tr"];
//  const indeks1 = 0;
//  pElementss.forEach((p) => {
//    p.textContent = c[ii];
//    ii++;
//  });

  // document.querySelector(".bold").textContent =
  // "Copyright Bir Şirket Sitesi 2022";
  const footer = document.querySelector("footer a") ;
  footer.textContent = siteContent.footer.copyright ;
  footer.classList.add ("bold");