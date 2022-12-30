let listItem = document.getElementsByTagName("li");
for (let i = 0; i < listItem.length; i++) {
  let span = document.createElement("span");
  let teks = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(teks);
  listItem[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let li = this.parentElement;
    li.style.display = "none";
  };
}

for (let i = 0; i < listItem.length; i++) {
  listItem[i].onclick = function () {
    listItem[i].classList.toggle("checked");
  };
}

// add element
const button = document.getElementsByClassName("addBtn")[0];

button.addEventListener("click", function () {
  const liBaru = document.createElement("li");
  const ul = document.getElementById("myUL");
  const inputValue = document.getElementById("myInput").value;
  const teksLi = document.createTextNode(inputValue);
  let li1 = document.querySelector("li:nth-child(1)");

  liBaru.appendChild(teksLi);

  if (inputValue === "") {
    alert("masukkan list");
  } else {
    ul.insertBefore(liBaru, li1);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    liBaru.appendChild(span);
  }
  document.getElementById("myInput").value = "";

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  for (let i = 0; i < listItem.length; i++) {
    listItem[i].onclick = function () {
      listItem[i].classList.toggle("checked");
    };
  }
});
