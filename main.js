// Selecting One/Multiple Elements
const reke = document.getElementById('reke');
const gradovi =  document.getElementById('gradovi');
const planine =  document.getElementById('planine');
const listItems = document.querySelectorAll('ul:nth-of-type(1)');


function appliesClass() {
    gradovi.classList.add('gradoviUSrbiji');
}
appliesClass();


function setListItemBgColor() {
    listItems.forEach(item => {item.classList.add('list-item-bg-color');});
  }
  setListItemBgColor();


function selectThirdListElements() {
    planine.classList.add('container-third');
}
  selectThirdListElements();


  // Traversing
  const akitvan = document.getElementById('sela');
  const firstLi = document.querySelector('div > ul li:nth-of-type(1)');
  const secondLi = document.querySelector('div > ul li:nth-of-type(2)');
  const thitdLi = document.querySelector('div > ul li:nth-of-type(3)');

  function addClass() {
    firstLi.classList.add('active');
    secondLi.classList.add('test');
  }
  addClass();

  function removeClass() {
    firstLi.classList.remove('active');
  }
  removeClass();

  function addClassSecEL() {
    thitdLi.classList.add('active');
  }
  addClassSecEL();

  // Access/Update Text Node
  const  navbar = document.getElementById('navbar-2').textContent;
  
  function getTextAllert() {
    window.alert(navbar);
  }
  const latestEl = window.document.querySelector("nav > ul > li:last-child");
  var x = "Neki tekst";

  function changeText(nekiTekst) {
    latestEl.innerHTML = nekiTekst;
  }

  // InnerHTML
  function buildDropdown(items, parentNode) {
    const select = document.createElement("select");
    for (const item of items) {
      const option = document.createElement("option");
      option.textContent = item;
      select.appendChild(option);
    }
    parentNode.appendChild(select);
  }
  const items = ["Menu", "About us", "Contact"];
  const parentNode = document.querySelector("#parent-node");
  
  buildDropdown(items, parentNode);


  function buildDropdown2(items2, parentNode2) {
    const optionsHTML = items2.map(item => `<option>${item}</option>`).join("");
    const dropdownHTML = `<select>${optionsHTML}</select>`;
    parentNode2.innerHTML += dropdownHTML;
  }
  const parentNode2 = document.querySelector("#parent-node2");
  const items2 = ["Option 1", "Option 2", "Option 3"];

  buildDropdown(items2, parentNode2);


  const firstDiv = document.querySelector("div:first-of-type");
  const lastDiv = document.querySelector("div:last-of-type");

  //Attributes
  function validateForm() {
    const inputs = document.querySelectorAll("#myForm input, #myForm textarea");

    for (const input of inputs) {
      if (input.hasAttribute("required") && !input.value) {
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "";
      }
    }
  }
  const form = document.querySelector("#myForm");
  form.addEventListener("submit", event => {
    event.preventDefault();
    validateForm();
  });