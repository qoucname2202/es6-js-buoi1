const listColor = [
	'pallet',
	'viridian',
	'pewter',
	'cerulean',
	'vermillion',
	'lavender',
	'celadon',
	'saffron',
	'fuschia',
	'cinnabar',
];
const colorContainer = document.getElementById('colorContainer');
const content = listColor
	.map(item => {
		return `
    <button class="color-button ${item}" onclick="changeHomeColor('${item}')"></button>
  `;
	})
	.join('');
colorContainer.innerHTML = content;
const button = document.querySelectorAll('.color-button');
button[0].classList.add('active');

const changeHomeColor = color => {
	const button = document.querySelectorAll('.color-button');
	button.forEach(btn => {
		btn.classList.remove('active');
	});

	listColor.forEach((item, idx) => {
		if (item === color) {
			button[idx].classList.add('active');
		}
	});
	const house = document.querySelector('.house');
	house.className = `house ${color}`;
};

