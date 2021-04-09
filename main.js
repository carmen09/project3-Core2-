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
artImage.style.filter(purple-warm) ;


})


$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #62f727, #0906bb, #bb0669');
  });




    
  


}


