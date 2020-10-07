const fakestore = new Fakestore();
const ui = new UI();

fakestore.getItem().then((data) => {
  console.log(data);
  data.map((data) => {
    ui.showItem(data.item);
  });
  console.log(data.storeData[1]);
});
