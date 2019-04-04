
const GOODS = [
	{img: "xiaomi.png", title : 'Xiaomi Redmi Note 5', price: '15 000'},
	{img: "xiaomi.png", title : 'Xiaomi Redmi 5', price: '14 000'},
	{img: "xiaomi.png", title : 'Xiaomi Redmi 4A', price: '11 000'},
	{img: "xiaomi.png", title : 'Xiaomi MiMix 8', price: '30 000'},
	{img: "xiaomi.png", title : 'Xiaomi Redmi 6', price: '20 000'},
	{img: "xiaomi.png", title : 'Xiaomi Redmi 6A', price: '15 000'},
	{img: "xiaomi.png", title : 'Xiaomi Redmi Note 4', price: '10 000'},
	{img: "xiaomi.png", title : 'Xiaomi Redmi 5A', price: '12 000'}
];
/*
const renderGoodsItem = (img, title, price) => {
	return `<div class='goods-item'><a href="#"><img src=${img}><h3>${title}</h3><p>${price}</p><button class='buyBtn'>Купить</button></a></div>`
};*/
/*
const renderGoodsList = (list) => {
	const goodsList = list.map (item => renderGoodsItem (item.img, item.title, item.price));
	document.querySelector('#catalog').innerHTML = goodsList.join('');
};
renderGoodsList(GOODS);*/


for (let i=0; i < GOODS.length; i++) {
	document.querySelector('#catalog').innerHTML += "<div class='goods-item'><a href='#'><img src=" + GOODS[i].img + "><h3>" + GOODS[i].title + "</h3><p>" + GOODS[i].price + "</p><button class='buyBtn'>Купить</button></a></div>"
	console.log(document.querySelector('#catalog').innerHTML);
}
