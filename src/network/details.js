import { request } from "./request";

export function getDetail(iid) {
	return request({
		url: '/detail',
		params: {
			iid
		}
	})
}


export class Shop {
	constructor(ShopInfo) {
		this.logo = ShopInfo.shopLogo;
		this.name = ShopInfo.name;
		this.fans = ShopInfo.cFans;
		this.sells = ShopInfo.cSells;
		this.score = ShopInfo.score;
		this.goodsCount = ShopInfo.cGoods;
		this.services = ShopInfo.services;
		this.shopUrl = ShopInfo.shopUrl;
	}
}

export function recommend() {
	return request({
		url: '/recommend'
	})
}

export class recommendInfo {
	constructor(info) {
		this.show.img = info.image
		this.title = info.title
		this.price = info.price
		this.cfav = info.cfav
	}
}
