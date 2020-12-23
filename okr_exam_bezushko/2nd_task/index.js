'use strict'

function Block() {
    return {
        init: (element) => {
            let counter = 0
            element.onclick = (ev) => {
                counter++
                const className = element.classList[0]
                document.querySelector(`.${className}-counter`).innerHTML = String(counter)
            }
        }
    }
}

function onLoad() {
    const elements = document.querySelector('.wrapper');
    [].slice.apply(elements.children).forEach(function (element) {
        const block = new Block()
        block.init(element)
    })
}

window.onload = onLoad
