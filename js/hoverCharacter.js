const text = document.querySelector('.heading').textContent;
const textList = [...text].filter(item => item !== ' ');
const jumpText = arrText => {
	const content = arrText
		.map(item => {
			return `
      <span>${item}</span>
    `;
		})
		.join('');
	document.querySelector('.heading').innerHTML = content;
};
jumpText(textList);
