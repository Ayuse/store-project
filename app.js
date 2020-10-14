const search = document.getElementById('search-box');
let storeData = [];

const getStore = async () => {
  try {
    const storeItem = await fetch(`https://fakestoreapi.com/products`);
    storeData = await storeItem.json();
    console.log(storeData);
  } catch (err) {
    console.error(err);
  }
};
function hideloader() {
  document.getElementById('loading').style.display = 'none';
}

// search.addEventListener('keyup', (e) => {
//   const searchString = e.target.value.toLowerCase();
//   console.log(searchString);
//   const filteredStore = storeData.filter((storeitem) => {
//     return storeitem.title.includes(searchString);
//   });
//   console.log(filteredStore);
// });
// function show(data) {
//   let item = ``;

//   for (let r of data.storeData) {
//     item += `
//   <div class="item">
//   <img class="img" src="${r.image}" alt="" />
//   <h1>${r.title}</h1>
//   <p>${r.description}</p>
//   <p>${r.price}</p>
// </div>
//   `;
//   }
//   document.getElementById('itemDisplay').innerHTML = item;
// }
