import { request } from "./request";

export function getHomeMultdata() {
	return request({
		url: '/home/multidata'
	})
}


export function getHomeGoods(type, page) {
	return request({
		url: "/home/data",
		params: {
			type,
			page
		}
	})

}


export class getGoodsInfo {
	constructor(info) {
		this.image = info.show.img
		this.title = info.title
		this.price = info.price
		this.cfav = info.cfav
	}
}

