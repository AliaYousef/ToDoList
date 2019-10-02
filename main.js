document.getElementById("take").addEventListener( "click" ,move) ;



var list = [];
function move() {
 // create LI element 
var li = document.createElement('LI');
var inputValue = document.getElementById('checValue').value;
var inputValueObj =[{value : document.getElementById('checValue').value , check : false }];
var t = document.createTextNode(inputValue);

list.push(inputValueObj);
list.forEach((item, i) => {
  item.id = i + 1;
});

console.log(list);
li.appendChild(t);
li.setAttribute("class", "task");
li.setAttribute("id", "task");
document.getElementById("add").appendChild(li);
document.getElementById('checValue').value="";
 // add IMG at first
var mylist = document.getElementsByTagName("li");
var i;
for (i = mylist.length-1; i < mylist.length; i++) {
    var img3 = document.createElement("IMG");
    img3.setAttribute("src", "unchecked.png");
    img3.setAttribute("class", "img3");
    img3.setAttribute("id", "uncheched");
    img3.setAttribute("alt", "");
    mylist[i].appendChild(img3);
  }
// add IMG at last
for (i = mylist.length-1; i < mylist.length; i++) {
    var img4 = document.createElement("IMG");
    img4.setAttribute("src", "close.png");
    img4.setAttribute("class", "img4");
    img4.setAttribute("id", "close");
    img4.setAttribute("alt", "");
    mylist[i].appendChild(img4);
}
// close LI element on click
var close = document.getElementsByClassName("img4");
for (i = close.length-1; i < close.length; i++) {
  // console.log(i);
  close[i].onclick = function  () {
  var li = this.parentElement;  
  li.style.display = "none";
  var x = list.find(function checkId (list){
    return list.id >= (i);
  });
  console.log(x);
  var y = list.findIndex(function checkId (list){
    return list.id >= (i);});
  console.log(y);
  list.splice(y,1);
  console.log(list)
}

}
// conter 
var task = list.length;
console.log(task)
document.getElementById('num').innerHTML = task + "task left";
// document.getElementById("all").addEventListener("click", allChecked);
//     function allChecked(){
//         var all = document.getElementsByClassName("img3");
//         for (i = 0; i < all.length; i++) {
//             console.log(all[i].src);
//             if (all[i].src.match("unchecked.png")){
//                 all[i].src = "check.png";
//             }
//             if (all[i].src.match("check.png")){
//                 all[i].src = "unchecked.png";
//             }
//         }
   
//       }
    }
