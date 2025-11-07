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
arrIcon.forEach((icon) => {
const audio = sound[icon.id as keyof typeof sound];
const isTarget = icon.id === target.id;
const isActive = icon.dataset.active === 'true';

if (!audio) return;
	
if (isTarget) {
if (isActive) {
pauseIcon(icon, audio);
} else {
playIcon(icon, audio);
}
} else {
pauseIcon(icon, audio);
}
});
}

function playIcon(icon: HTMLImageElement, audio: HTMLAudioElement) {
icon.dataset.active = 'true';
icon.src = 'assets/icons/pause.svg';
audio.currentTime = 0;
audio.play();
}

function pauseIcon(icon: HTMLImageElement, audio: HTMLAudioElement) {
icon.dataset.active = 'false';
icon.src = `assets/icons/${icon.id}.svg`;
audio.pause();
}

function setBackground(bg: string): void {
	const image = './assets/' + `${bg}.jpg`
	document.body.style.backgroundImage = `url(${image})`
}

setBackground('summer-bg')


