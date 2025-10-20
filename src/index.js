/* global document, Audio */
import './index.scss'
const menuWeatherSound = document.querySelector('.menuWeatherSound')
const iconEl = document.querySelectorAll(".icon")
const volume = document.querySelector('.volumeSound')
const rain = new Audio('assets/sounds/rain.mp3')
const summer = new Audio('assets/sounds/summer.mp3')
const winter = new Audio('assets/sounds/winter.mp3')
const arrIcon = [...iconEl]

const sound = {
	"sun": summer,
	"cloud-rain": rain,
	"cloud-snow": winter
}



menuWeatherSound.addEventListener("click", ({ target }) => {

	switch (target.id) {
		case 'sun':
			playerMusic(target)
			setBackground('summer-bg')
			break
		case 'cloud-rain':
			playerMusic(target)
			setBackground('rainy-bg')
			break
		case 'cloud-snow':
			playerMusic(target)
			setBackground('winter-bg')
			break

	}
}
)
volume.addEventListener('input', (e) => {
	const volumeValue = e.target.value / 100
	Object.values(sound).forEach(audio => {
		audio.volume = volumeValue
	})
})

function playerMusic(target) {
	arrIcon.forEach((el) => {
		if (el.id !== target.id) {
			el.dataset.active = 'false'
			el.src = `assets/icons/${el.id}.svg`
			sound[el.id].pause()
		} else {
			if (el.dataset.active === 'false') {
				el.dataset.active = 'true'
				el.src = `assets/icons/pause.svg`
				sound[el.id].play()
			} else {
				el.src = `assets/icons/${el.id}.svg`
				el.dataset.active = 'false'
				sound[el.id].pause()

			}
		}
	})
}

function setBackground(bg) {
	const image = './assets/' + `${bg}.jpg`
	document.body.style.backgroundImage = `url(${image})`
}

setBackground('summer-bg')