class LinkSelector {
  constructor(button) {
    this.button = button;
    this.id = this.button.dataset.id;
    button.addEventListener("click", () => this.showCurrentItem());
  }
  showCurrentItem() {
    const itemsNodeList = document.querySelectorAll(".item");
    const currentItem = document.querySelector(`.item[data-id="${this.id}"`);
    itemsNodeList.forEach(item => item.classList.remove("selected"));
    currentItem.classList.add("selected");
  }
}
const links = document.querySelectorAll(".link");
links.forEach(button => new LinkSelector(button));

// Changes the content if it's on mobile view
let content = window.matchMedia("(max-width: 485px)")
const lastLink = document.querySelector('.link[data-id="3"] h3')
window.addEventListener("resize", () => {
  content.matches === true 
    ? lastLink.textContent = "Kind-ness" 
    : lastLink.textContent = "Kindness"
  })
