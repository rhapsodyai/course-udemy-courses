const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 10

for(let i = 0; i < rows * 3; i++) {
	const img = document.createElement('img')
	//img.src = `${unsplashURL}${getRandomSize()}`
	let x, y = getRandom(300,1200)
	console.log('x', x)
	console.log('y', y)
	img.src = `https://placewaifu.com/image/${getRandom(300,1200)}/${getRandom(300,1200)}`
	container.appendChild(img)
}

function getRandomSize() {
	return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
	//return Math.floor(Math.random() * 10) + 300
	return Math.floor(Math.random() * 300) + 300
}

function getRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min)
}