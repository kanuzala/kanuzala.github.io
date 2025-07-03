document.getElementById('resultForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const gujarati = parseInt(document.getElementById('gujarati').value);
  const hindi = parseInt(document.getElementById('hindi').value);
  const english = parseInt(document.getElementById('english').value);
  const math = parseInt(document.getElementById('math').value);
  const evs = parseInt(document.getElementById('evs').value);

  const total = gujarati + hindi + english + math + evs;
  const percent = (total / 500 * 100).toFixed(2);
  let grade = '';

  if (percent >= 90) grade = 'A+';
  else if (percent >= 80) grade = 'A';
  else if (percent >= 70) grade = 'B';
  else if (percent >= 50) grade = 'C';
  else grade = 'D';

  const output = document.getElementById('output');
  output.style.display = 'block';
  output.innerHTML = `
    <h2>પરિણામ</h2>
    <p><strong>નામ:</strong> ${name}</p>
    <p><strong>કુલ ગુણ:</strong> ${total} / 500</p>
    <p><strong>ટકા:</strong> ${percent}%</p>
    <p><strong>ગ્રેડ:</strong> ${grade}</p>
  `;
});
