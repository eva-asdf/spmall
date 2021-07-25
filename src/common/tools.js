//节流/防抖函数
export function debounce(func, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}


// 提示
export function tips (word,target) {
    let a = document.createElement('div')
    a.innerHTML = word
    a.className = 'tips'
    target.appendChild(a)
    setTimeout(() => {
        target.removeChild(a)
    }, 2000);


}




