import './index.scss'
const menuWeatherSound:HTMLDivElement = document.querySelector('.menuWeatherSound') 
const iconEl = document.querySelectorAll<HTMLImageElement>(".icon") 
const volume:HTMLDivElement = document.querySelector('.volumeSound')
const rain = new Audio('assets/sounds/rain.mp3')
const summer = new Audio('assets/sounds/summer.mp3')
const winter = new Audio('assets/sounds/winter.mp3')
const arrIcon : HTMLImageElement[] = Array.from(iconEl)

const sound = {
	"sun": summer,
	"cloud-rain": rain,
	"cloud-snow": winter
}



menuWeatherSound.addEventListener("click", (event: Event): void => {
   const target = event.target as HTMLElement;

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
volume.addEventListener('input',  (event: Event): void => {
	const target = event.target as HTMLInputElement;
	const volumeValue = Number(target.value) / 100
	Object.values(sound).forEach(audio => {
		audio.volume = volumeValue
	})
})

function playerMusic(target: HTMLElement): void {
	arrIcon.forEach((el) => {
		if (el.id !== target.id) {
			el.dataset.active = 'false'
			el.src = `assets/icons/${el.id}.svg`
			 const audio = sound[el.id as keyof typeof sound];
			 if (audio) {
                audio.pause();
            }
		} else {
			if (el.dataset.active === 'false') {
				el.dataset.active = 'true'
				el.src = `assets/icons/pause.svg`
			 const audio = sound[el.id as keyof typeof sound];
			 if (audio) {
                audio.play();
            }
			} else {
				el.src = `assets/icons/${el.id}.svg`
				el.dataset.active = 'false'
				 const audio = sound[el.id as keyof typeof sound];
			 if (audio) {
                audio.pause();
            }

			}
		}
	})
}

function setBackground(bg: string): void {
	const image = './assets/' + `${bg}.jpg`
	document.body.style.backgroundImage = `url(${image})`
}

setBackground('summer-bg')