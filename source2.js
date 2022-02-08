update();

function getandupdate() {
    title = document.getElementById("title").value;
    desc = document.getElementById("Description").value;

    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([title, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        console.log("done if");

    } else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([title, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        console.log("done else")
    }
    update();
}
function update(){
 if(localStorage.getItem('itemsJson')==null){
    itemJsonArray = [];
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
 }
else{
    itemJsonArraystr = localStorage.getItem('itemsJson')
    t=itemJsonArray = JSON.parse(itemJsonArraystr);
}
    // populate the table.
    dataentry = document.getElementById("dataentry");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str +=
            `<tr>
            <td>${index + 1}</td>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick ="deletee(${index})">Delete</button></td>
        </tr>`;
    });
    dataentry.innerHTML = str;
}
tap = document.getElementById("tap");
tap.addEventListener("click", getandupdate);
update();
function deletee(itemIndex) {

itemJsonArrayStr = localStorage.getItem('itemsJson')
itemJsonArray = JSON.parse(itemJsonArrayStr);
itemJsonArray.splice(itemIndex, 1);
localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
update();

}



// mycar = new Object();
// mycar.model = 'v4';
// mycar.pistons = '5';
// mycar.color = 'green';
// console.log(JSON.stringify(mycar));

// let details = '{"model":"2019","color":"black","name":"altroz"}';

// mycar = new Object;
// mycar = JSON.parse(details);
// console.log(mycar);
// console.log( JSON.parse('details') );

// const text = ["ford","BMW","audi","Fiat"];
// console.log(text[0]);

function clearlist(){
    if(confirm("Are you sure you want to clear the list")){
        console.log("Storage Cleared");
        localStorage.clear();
        update();
    }

}