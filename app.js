const search = document.getElementById('search-box');
let storeData = [];

const getStore = async () => {
  try {
    const storeItem = await fetch(`https://fakestoreapi.com/products`);
    storeData = await storeItem.json();
    console.log(storeData);
    show(storeData);
  } catch (err) {
    console.error(err);
  }
};
setTimeout(() => {
  getStore();
}, 1500);
// if (storeData) {
//   hideloader();
// }
function hideloader() {
  document.getElementById('loading').style.display = 'none';
}

// getStore();

search.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);
  const filteredStore = storeData.filter((storeitem) => {
    return (
      storeitem.title.toLowerCase().includes(searchString) ||
      storeitem.category.toLowerCase().includes(searchString)
    );
  });
  show(filteredStore);
});

const show = (data) => {
  let item = data
    .map((data) => {
      return `
  <div class="item">
  <img class="img" src="${data.image}" alt="" />
  <h1>${data.title}</h1>
  <p>${data.description}</p>
  <p>${data.price}</p>
</div>
  `;
    })
    .join('');
  document.getElementById('itemDisplay').innerHTML = item;
};
