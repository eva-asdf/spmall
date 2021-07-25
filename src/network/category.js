import { request } from "./request";

export function getCategory() {
    return request({
        url: '/category'
    })
}

export function getSubcategory(maitKey) {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}

export function getSubategoryData(miniWallkey,type) {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
} 


export class goods {
    constructor(info) {
        this.image = info.img
        this.title = info.title
        this.title = info.title
        this.cfav = info.cfav

    }
}