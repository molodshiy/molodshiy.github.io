const value = document.getElementById('value');
const doit = document.getElementById('doit');

const calculate = e => {
  const height = parseFloat(document.getElementById('height').value);
  const radiusBigger = parseFloat(document.getElementById('diameterBigger').value) / 2;
  const radiusSmaller = parseFloat(document.getElementById('diameterSmaller').value) / 2;

  e.preventDefault();

  const value =
    (Math.PI * height * (Math.pow(radiusBigger, 2) + radiusBigger * radiusSmaller + Math.pow(radiusSmaller, 2))) / 3;
  document.getElementById('value').innerText = value + 'ml';
};

doit.addEventListener('click', e => calculate(e));
