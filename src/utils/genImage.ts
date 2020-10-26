const jdenticon = require('jdenticon');
const fs = require('fs');
const path = require('path');
const filePath = path.join(process.cwd(), 'images');

export function createIdenticon() {
	const randomValue = genRandomName();
	return createImage(randomValue);
}

function genRandomNumber(minimum, maximum) {
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
function createImage(value, size = 200) {
	const png = jdenticon.toPng(value, size);
	fs.writeFileSync(`${filePath}/${value}.png`, png);
	return `${value}.png`;
}
function genRandomName() {
	const arr = ['one', 'two', 'three', 'four', 'five', 'six'];
	const randomInt = genRandomNumber(0, arr.length);
	if (!arr[randomInt]) {
		return arr[0];
	}
	return arr[randomInt];
}
