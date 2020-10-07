class Fakestore {
  constructor() {}

  async getItem() {
    const storeResponse = await fetch(`https://fakestoreapi.com/products`);
    const storeData = await storeResponse.json();
    storeData;
    return {
      storeData,
    };
  }
}
