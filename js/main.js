//Creates the product constuctor
function Shirt(name,size,color,stock,image) {
  this.name = name
  this.size = size
  this.color = color
  this.stock = stock
  this.image = image
}

//create new products from the constuctor

var whitetee =new Shirt("White Tee", "Medium", "White", 150,"img/whitetee.png");
var redtee =new Shirt("Red Tee", "Small", "Red", 25,"img/redtee.png");
var blacktee =new Shirt("Black Tee", "Large", "Black", 35,"img/blacktee.png");
var bluetee =new Shirt("Blue Tee", "Medium", "Blue", 45,"img/bluetee.png");
var greentee =new Shirt("Green Tee", "Small", "Green", 78,"img/greentee.png");
var yellowtee =new Shirt("Yellow Tee", "Large", "Yellow", 98,"img/yellowtee.png");

//create an array for new products
var tShirtArray = new Array

//add tshirts to the array of products
tShirtArray.push(whitetee, redtee, blacktee, bluetee, greentee, yellowtee);

//loop through the tshirts
for (var i = 0; i < tShirtArray.length; i++) {
//create elements for tshirts products
  var newItem = document.createElement("div");
  var newDiv = document.createElement("div");
  var nameH1 = document.createElement("h1");
  var sizeH4 = document.createElement("h4");
  var colorH4 = document.createElement("h4");
  var stockH4 = document.createElement("h4");
  var btn = document.createElement("button");
  var image =document.createElement("img");

  //create new text for each elements
  var tName = document.createTextNode (tShirtArray[i].name);
  var tSize = document.createTextNode ("Available Size:" + tShirtArray[i].size);
  var tColor = document.createTextNode("Color:" + tShirtArray[i].color);
  var tStock = document.createTextNode("Stock:" + tShirtArray[i].stock);
  var tButton = document.createTextNode("Buy Now");

  //image source
  image.src = tShirtArray[i].image

  //class

  image.className = "img-responsive"
  btn.className = "btn btn-primary btn-lg"
  newItem.className = "col-sm-4"
  newDiv.className = "thumbnail"

//print elements to the screen
  nameH1.appendChild(tName);
  sizeH4.appendChild(tSize);
  colorH4.appendChild(tColor);
  stockH4.appendChild(tStock);
  btn.appendChild(tButton);

// add elements to new div
  	newDiv.appendChild(nameH1)
  	newDiv.appendChild(image)
  	newDiv.appendChild(sizeH4)
  	newDiv.appendChild(colorH4)
  	newDiv.appendChild(stockH4)
  	newDiv.appendChild(btn)

    // add new div to new item div
	newItem.appendChild(newDiv)


	document.getElementById("products").appendChild(newItem)
}
