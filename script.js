function init () {
const blueFont = document.querySelector('.blue')
const greenFont = document.querySelector('.green')
const orangeFont = document.querySelector('.orange')
const pinkFont = document.querySelector('.pink')
const sunriseFont = document.querySelector('.sunrise')
const whiteFont = document.querySelector('.white')
const purpleFont = document.querySelector('.purple')
const tealFont = document.querySelector('.teal')
const seaFont = document.querySelector('.sea')
const maroonFont = document.querySelector('.maroon')
const armyFont = document.querySelector('.army')
const redFont = document.querySelector('.red')

blueFont.addEventListener('click', function(){
    document.documentElement.style.setProperty('--secondary-color', '#0000ff');
})

greenFont.addEventListener('click', function(){
    document.documentElement.style.setProperty('--secondary-color', '#008000');
})

orangeFont.addEventListener('click', function(){
    document.documentElement.style.setProperty('--secondary-color', '#ffa500');
})

pinkFont.addEventListener('click', function(){
    document.documentElement.style.setProperty('--secondary-color', '#ffc0cb');
})

sunriseFont.addEventListener('click', function(){
    document.documentElement.style.setProperty('--secondary-color', '#ff4500');
})

whiteFont.addEventListener('click', function(){
    document.documentElement.style.setProperty('--secondary-color', '#ffffff');
})

purpleFont.addEventListener('click', function(){
    document.documentElement.style.setProperty('--secondary-color', '#800080');
})

tealFont.addEventListener('click', function(){
    document.documentElement.style.setProperty('--secondary-color', '#008080');
})

seaFont.addEventListener('click', function(){
    document.documentElement.style.setProperty('--secondary-color', '#2e8b57');
})

maroonFont.addEventListener('click', function(){
    document.documentElement.style.setProperty('--secondary-color', '#800000');
})

armyFont.addEventListener('click', function(){
    document.documentElement.style.setProperty('--secondary-color', '#164400');
})

redFont.addEventListener('click', function(){
    document.documentElement.style.setProperty('--secondary-color', '#ff0000');
})


const settings = document.getElementById('#settings')
const settingsButton = document.querySelector('.icon')
let count = 0


settingsButton.addEventListener('click', function () {
settings.classList.remove('settings')
 if(count === 0) {
     settings.classList.toggle('settings-open')
     count++
 } else {
    settings.classList.toggle('settings-open')
    settings.classList.toggle('settings-close')
 }

})


}

window.onload = init