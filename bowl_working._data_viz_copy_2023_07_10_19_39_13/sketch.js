let table;
let data;
let noodles;
let noodleHeight;
let price;
let loss;
let commodity;

function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();

  
  // Choose a random row from the table
  let row = table.getRow(floor(random(table.getRowCount())));

  // Get the values from the row
  let country = row.get('country');
  let commodity = row.get('commodity');
  price = (row.get('post_covid')*100);
  let abs_price = abs(price);
  integer = floor(price);
  balls = floor(abs_price);
  food = (integer);
  noSmooth();
  
  // window.alert('This visualization shows the change in prices of various commodities before and after the COVID-19 pandemic. The bowl of noodles represents the commodity being analyzed, with each noodle representing a percentage change in price. The key at the bottom of the screen shows the colors used to represent price increases and decreases. Click "OK" to close this pop-up and view the visualization.');

  

 // Change background color based on price
if (0 > price) {
  background(0, 255, 0);
   let pricesText = "Price: -" + abs(price) + "%"; // Add negative sign to price text
   fill(255);
  textSize(30);
  text(pricesText, width* 0.05, height * 0.05); // Display modified price text on the canvas
} else if (price == 0) {
  background(255, 255, 0); // Change background color to yellow if price is 0
  let priceText = "Price: " + price + "%";
  fill(0);
  textSize(30);
  text(priceText, width* 0.05, height * 0.05);
 alert("Hmm, there was no change for this one. you found a rare one!");
} else {
  background(255, 0, 0);
  let priceText = "Price: +" + abs(price) + "%"; // Add negative sign to price text
  fill(255);
  textSize(30);
  text(priceText, width* 0.05, height * 0.05); // Display modified price text on the canvas
}

  // Draw the noodle bowl

  fill(0);
 beginShape();
  arc(width/2, height/2, width/3, width/3, 0, PI);
endShape();
    fill(200);
  ellipse(width/2, height/2, width/3, width/6);


noodles = [];

// Draw 50 circles to completely cover the bowl
for (let i = 0; i < 100; i++) {
  let x = random(width/2 - width/7, width/2 + width/7);
  let y = random(height/2 - width/20, height/2 + width/20);
  let s = width * 0.025;
  fill(255, 218, 118); // Yellowish color
  ellipse(x, y, s, s); // Draw the circle
}

  for (let i = 0; i <balls; i++) {
  let x = random(width/2 - width/8, width/2 + width/8);
 let y = random(height/2 - width/22, height/2 + width/22);
  let siza = width * 0.02;
  noodles.push({x: x, y: y, siza: siza});
   if (0 >= price) {
      fill('brown');
} else {
  fill (200);
}
  
  ellipse(x, y, siza, siza); // Thick and wavy noodles

  }
  
  // Draw the key
  textSize(width * 0.02);
  fill(200); // Yellowish color
  ellipse(width /10, height/2.5, width * 0.03, width * 0.03); // Draw color circle
  fill(0);
  text('= Price Increase', width /8, height/2.48);
  text('   or Loss', width /8, height /2.3);
  fill('brown');
  ellipse(width /10, height/2,  width * 0.03, width * 0.03); // Draw color circle
  fill(0);
  text('= Price Decrease', width /8, height /1.98);
text('   or Abundance', width /8, height /1.85);
 textAlign(CENTER);

  textSize(width * 0.05);
  fill(0);
text('Prices Before and After COVID-19', width/2, width/10);

  // Draw the title
  textSize(width* 0.04);
  fill(0);
  text('Commodity:   ' + commodity, width / 3, height / 3.5);
  
  // Draw the country name
  textSize(width* 0.04);
  text(country, width / 2, height - 50);
textAlign(CENTER);
  // Draw the percentage as a large number
  textSize(200);
  // if (price >= 0) {
    // fill(0, 0, 0);
  // } else {
    fill(255, 255, 255);
  // }
  text(price.toFixed(2) + "%", width/2 , (4.2 * height) / 5);
}
function mousePressed() {
  console.log(mouseX, mouseY);
}

function refresh() {
  randomIndex = Math.floor(Math.random() * data.getRowCount());
}

function openPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function openPopup() {
  let popup = window.open("", "Popup", "width=500,height=500");
  let popupContent = `
    <html>
      <head>
        <title>About Food Prices Before and After COVID-19</title>
        <style>
          body {
            margin: 0;
            padding: 20px;
            font-size: 20px;
          }
          h1 {
            font-size: 30px;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <h1>About Food Prices Before and After COVID-19</h1>
        <p>This random data visualization shows the change in prices of different food commodities before and after the COVID-19 pandemic in various countries. The bowl represents the price change, with each ellipse representing a percentage point change in price. The color of the noodles represents whether the price increased (gray to represent emptiness) or decreased (brown to represent the increase).</p>
      </body>
    </html>
  `;
  popup.document.write(popupContent);
}
