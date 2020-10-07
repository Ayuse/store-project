class UI {
  constructor() {
    this.itemDisplay = document.getElementById('itemDisplay');
  }

  showItem(data) {
    this.dataDisplay.innerHTML = `
        <div class="item">
        <img src="${data.storeData[1]}" alt="" />
        <h1>${data.storeData[1]}</h1>
        <p>${data.storeData[1]}</p>
        <p>${data.storeData[1]}</p>
      </div>
        `;
  }
}
