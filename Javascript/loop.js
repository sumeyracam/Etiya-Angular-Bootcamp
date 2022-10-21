let krediler = ["ihtiyac", "tasıt", "araç"];

//*iterate, iteration
console.log("<ul>");
for (let i = 0; i < krediler.length; i++) {
	console.log("<li>" + krediler[i] + "</li>");
}
console.log("</ul>");

//*arrow function
krediler.forEach(kredi => {
	console.log("Foreach: ", kredi);
});

let urunler = [
	{fiyat: 100, ad: "Ürün 1", discount: true, rate: 15},
	{fiyat: 150, ad: "Ürün 2", discount: false, rate: 0},
	{fiyat: 200, ad: "Ürün 3", discount: true, rate: 2.5},
];

//tüm ürünleri gez fiyat %10 indirimli olarak yazdir.
//%10 indirimli de 150tl üstündeyse pahalı yaz

urunler.forEach(urun => {

    let indirimli=urun.fiyat-(urun.fiyat*10)/100;
    indirimli > 150 ? console.log( urun.ad , "indirimli") : console.log( urun.ad ,"pahalı");

});

urunler.forEach(urun => {
//tüm ürünleri gezip fiyatı discount true ise rate kadar indirimli olarak yaz 
urun.discount ? console.log(urun.ad, urun.fiyat -= urun.fiyat * (urun.rate / 100) ,"kadar indirimli ") : "" ;

});

// %10 indirimliyken  150 nin  üzerinde ise pahalı yaz
urunler.forEach(urun => {
	if (urun.discount === true) {
		urun.fiyat -= urun.fiyat * (urun.rate / 100);
	}
	if (urun.fiyat > 150) console.log(urun.ad , "PAHALI");

	console.log(urun);
});

//160tl üzerindeki ürünleri getir
urunler.forEach((urun) => {
	if (urun.fiyat > 160) console.log(urun);

});
