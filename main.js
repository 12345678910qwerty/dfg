const btn = document.querySelector('.btn')
const quoteDisplay = document.querySelector('#quote')

function showQuote(data) {
    const random = Math.floor(Math.random() * data.length)
    quoteDisplay.textContent = data[random].quote
}

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', `https://dummyjson.com/quotes`)
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.responseText).quotes
        console.log(data)
        showQuote(data)
    })
})











