const input = document.getElementById('searchInput');
const container = document.getElementById('searchContainer');
const tableBody = document.querySelector('table tbody');

const ranksData = [
  { title: "", rank: "", currency: "" },
  { title: "", rank: "", currency: "" },
  { title: "", rank: "", currency: "" },
  { title: "", rank: "", currency: "" },
  { title: "", rank: "", currency: "" }
];

function populateTable(data) {
  tableBody.innerHTML = "";
  data.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td title="لقب: ${item.title}">${item.title}</td>
      <td title="رتبة: ${item.rank}">${item.rank}</td>
      <td title="العملة: ${item.currency}">${item.currency}</td>
    `;
    tableBody.appendChild(tr);
  });
}

populateTable(ranksData);

input.addEventListener('focus', () => {
  container.style.transform = 'scale(1.05)';
});

input.addEventListener('blur', () => {
  container.style.transform = 'scale(1)';
});

input.addEventListener('input', () => {
  const filter = input.value.toLowerCase();
  const filteredData = ranksData.filter(item =>
    item.title.toLowerCase().includes(filter)
  );
  populateTable(filteredData);
});
