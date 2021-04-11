var Airtable = require("airtable");
console.log(Airtable);

//use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keymS2olAIhZo74QZ" }).base(
  "appT8o1qQpBCRhJpX"
);
//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("artwork").select({}).eachPage(gotPageOfArts, gotAllArts);
// an empty array to hold our book data
const arts = [];

// callback function that receives our data
function gotPageOfArts(records, fetchNextPage) {
  console.log("gotPageOfArts()");
  // add the records from this page to our array
  arts.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllArts(err) {
  console.log("gotAllArts()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogArts();
  showArts();
}

// just loop through the books and console.log them
function consoleLogArts() {
  console.log("consoleLogArts()");
  arts.forEach((art) => {
    console.log("Art:", art);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showArts() {
  console.log("showArts()");
  arts.forEach((art) => {

    var artContainer = document.createElement("div");
    artContainer.classList.add("art-container");
    document.querySelector(".container").append(artContainer);

    var artImage = document.createElement("img");
    artImage.classList.add("art-image");
    artImage.src = art.fields.image[0].url;
    artContainer.append(artImage);



  })


  var xPos = 0;
var yPos = 0;
var dX = 0;
var dY = 0;
var mouseRaf = null;
var gradMoveRaf = null;

$(document).mousemove(function(event) {
  if (!mouseRaf) {
    mouseRaf = requestAnimationFrame(function() {
      windowWidth = $(window).width();
      windowHeight = $(window).height();
      
      mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
      mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

      dX = mouseXpercentage - xPos;
      dY = mouseYpercentage - yPos;
    
      mouseRaf = null;
    });
  }
  
  if (!gradMoveRaf) {
    gradMoveRaf = requestAnimationFrame(gradMove);
  }
});

function gradMove() {
  xPos += (dX / 50);
  yPos += (dY / 50);

  $('.rgradient').css('background', 'radial-gradient(at ' + xPos + '% ' + yPos + '%, #e6e6e6, #1e1e1e)');
  
  var absX = Math.abs(mouseXpercentage - xPos);
  var absY = Math.abs(mouseYpercentage - yPos);
  
  if (absX < 1 && absY < 1) {
    gradMoveRaf = null;
    console.log("stop");
  } else {
    gradMoveRaf = requestAnimationFrame(gradMove);
    console.log("repeat");
  }
}

}


