//my function
function add() {
    //variables
    var x = 'Total:';
    var y = document.getElementById("myText2").value;
    var z = document.getElementById("myText1").value;
    //writes the items you enter
    //makes a separating line
    var para = document.createElement("h4");
    var node = document.createTextNode('_____');
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
    //makes the item
     para = document.createElement("h4");
     node = document.createTextNode(z);
    para.appendChild(node);
     element = document.getElementById("div1");
    element.appendChild(para);
    //makes the price
     para = document.createElement("p");
     node = document.createTextNode(y);
    para.appendChild(node);
     element = document.getElementById("div1");
    element.appendChild(para);
    //writes "Total (total price)"   
     var w = document.getElementsByTagName("p"); // this gets all the P's as an object
    // setup a total starting at 0
     var total = 0;

    for (var i = 0; i < w.length; i++) {
        total += parseInt(w[i].innerText);  // make the inner text an integer for addition.
    }
    document.getElementById("demo1").innerHTML = x;
    document.getElementById("demo2").innerHTML = total;  // replace w with total
}




document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {
        
        add()
    
        
    });
});

