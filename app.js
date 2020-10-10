const fakestore = new Fakestore();
const ui = new UI();

fakestore.getItem().then((data) => {
  console.log(data);
  const response = data;
  if (response) {
    hideloader();
  }
  show(data);
});
function hideloader() {
  document.getElementById('loading').style.display = 'block';
}

function show(data) {
  let item = ``;

  for (let r of data.storeData) {
    item += `
  <div class="item">
  <img class="img" src="${r.image}" alt="" />
  <h1>${r.title}</h1>
  <p>${r.description}</p>
  <p>${r.price}</p>
</div>
  `;
  }
  document.getElementById('itemDisplay').innerHTML = item;
}
