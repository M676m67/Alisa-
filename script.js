const input = document.getElementById('searchInput');
const container = document.getElementById('searchContainer');
const tableBody = document.querySelector('table tbody');

const ranksData = [
  { title: "نوسا", rank: "مؤسسه", currency: "100k" },
  { title: "كاناو", rank: "مؤسسه", currency: "100k" },
  { title: "كوتوها", rank: "تدريبي", currency: "40k" },
  { title: "نيوفي", rank: "تدريبي", currency: "30k" },
  { title: "غوجو", rank: "تدريبي", currency: "30k" },
  { title: "ايرين", rank: "تدريبي", currency: "30k" },
  { title: "شينوبو", rank: "تدريبي", currency: "30k" },
  { title: "لاماكس", rank: "عضوه", currency: "10k" }, 
  { title: "آي", rank: "عضوه", currency: "10k" },
  { title: "توغا", rank: "عضوه", currency: "10k" },
  { title: "سوما", rank: "عضوه", currency: "10k" },
  { title: "يوسانو", rank: "عضوه", currency:"10k" },
  { title: "ياشيرو", rank: "عضوه", currency: "10k" },
  { title: "كيكه", rank: "عضوه", currency: "10k" },
  { title: "كازوها", rank: "عضوه", currency: "10k" },
  { title: "كانا", rank: "عضوه", currency: "10k" },
  { title: "ريكو", rank: "عضوه", currency: "10k" },
  { title: "ميتسوري", rank: "عضوه", currency: "10k" },
  { title: "شونا", rank: "عضوه", currency: "10k" },
  { title: "شيرايوكي", rank: "عضوه", currency: "10k" },
  { title: "شروق", rank: "عضوه", currency: "10k" },
  { title: "هيستوريا", rank: "عضوه", currency: "10k" },
  { title: "فورينا", rank: "عضوه", currency: "10k" }
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
window.onscroll = function() {
  document.getElementById("topBtn").style.display = 
    window.scrollY > 200 ? "block" : "none";
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
