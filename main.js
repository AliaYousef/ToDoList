document.getElementById("take").addEventListener("click", move);



var list = [];
var cunt = 0;

function move() {

  // create LI element 
  var li = document.createElement('LI');
  var inputValue = document.getElementById('checValue').value;
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    var inputValueObj = {
      value: document.getElementById('checValue').value,
      check: false,
      id: ++cunt
    };
    var t = document.createTextNode(inputValue);
    list.push(inputValueObj);
    li.appendChild(t);

    li.setAttribute("class", "task");
    li.setAttribute("id", "task");
    document.getElementById("add").appendChild(li);
    document.getElementById('checValue').value = "";
    // add IMG at first
    var mylist = document.getElementsByTagName("li");
    var i;
    for (i = mylist.length - 1; i < mylist.length; i++) {
      var img3 = document.createElement("IMG");
      img3.setAttribute("src", "unchecked.png");
      img3.setAttribute("class", "img3");
      img3.setAttribute("id", "uncheched");
      img3.setAttribute("alt", "");
      mylist[i].appendChild(img3);
    }
    // add IMG at last
    for (i = mylist.length - 1; i < mylist.length; i++) {
      var img4 = document.createElement("IMG");
      img4.setAttribute("src", "close.png");
      img4.setAttribute("class", "img4");
      img4.setAttribute("id", "close");
      img4.setAttribute("alt", "");
      mylist[i].appendChild(img4);
    }
  }
  // close LI element on click
  function parIndex(list) {
    for (i = close.length - 1; i < close.length; i++) {
      list.findIndex(function (list) {
        return list.id >= (i);
      });
    }
  }
 
  $(".img4").click(function () {
    $(this).parent().remove();
   $()
  });
  /// add cheched function 
  $(".img3").click(function () {
    var ind2 = $(this).index();
    if (list[ind2].check) {
      $(this).attr("src", "unchecked.png");
      $(this).parent().css("text-decoration", "none");
      list[ind2].check = false;
    } else {
      $(this).attr("src", "check.png");
      $(this).parent().css("text-decoration", "line-through");
      list[ind2].check = true;
    }
  })
  //// add all checked function
  var checkList = document.getElementsByClassName("img3");
  $("#all").click(function () {
    for (i = 0; i < checkList.length; i++) {
      $(".img3").attr("src", "check.png");
      $(".task").css("text-decoration", "line-through");
      list[i].check = true;
    }
  });

/// add clear complete function
  $("#clear").click(function () {
    for (i = 0; i < list.length; i++) {
      if (list[i].check) {
        $("ul li:eq(" + i + ")").remove();
        list.splice(i, 1);
      }
    }
  });


  var task = list.length;
  console.log(task)
  document.getElementById('num').innerHTML = task + "task left";

  console.log(list);
}