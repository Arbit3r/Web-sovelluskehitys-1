
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
let data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;
console.log(books)

var table = document.createElement('table');
let header = table.createTHead();
let row1 = header.insertRow(0);
let celltemp = row1.insertCell(0);
let cell2temp = row1.insertCell(1);
celltemp.innerHTML = "title";
cell2temp.innerHTML = "year";

let row;

for (var i=0; i < books.length; i++) {

  row = header.insertRow(i+1);
  row.setAttribute("id",i + "row",)
  row.setAttribute("onclick","update(this.id)")
  let cell = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell.innerHTML = books[i].title;
  cell2.innerHTML = books[i].year;
}
row.onclick = update;
function update(id){
  document.getElementById("title").innerHTML = document.getElementById(id).firstChild.textContent;
}

document.body.appendChild(table);
