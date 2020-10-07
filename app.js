const fakestore = new Fakestore();
const ui = new UI();

fakestore.getItem().then((data) => {
  console.log(data);
  show(data);
});

function show(data) {
  let item = ` <div class="item">
  <img class="img" src="" alt="" />
  <p>Item 1</p>
  <a href="">www.item1.com</a>
</div>`;

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
