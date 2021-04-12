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
  try {
    showArts();
  } catch (e) {
    console.error(e);
  }
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
    // creating art container, adding to container
    var artContainer = document.createElement("div");
    artContainer.classList.add("art-container");
    document.querySelector(".container").append(artContainer);
    // creating image and adding it to the art container
    var artImage = document.createElement("img");
    artImage.classList.add("art-image");
    artImage.src = art.fields.image[0].url;
    artContainer.append(artImage);
    // var artContainer = document.createElement("div");
    // artContainer.classList.add("art-container");
    // document.querySelector(".container").append(artContainer);
    var artTitle = document.createElement("h1");
    artTitle.classList.add("art-title");
    artTitle.innerText = art.fields.name;
    artContainer.append(artTitle);
    //add artists
    var artOrigin = document.createElement("h1");
    artOrigin.classList.add("art-origin");
    artOrigin.innerText = art.fields.origin;
    artContainer.append(artOrigin);
    // add description to container
    var artDescription = document.createElement("h1");
    artDescription.classList.add("art-description");
    artDescription.innerText = art.fields.description;
    artContainer.append(artDescription);
    // open and close container when clicked
    artContainer.addEventListener("click", function (event) {
      artDescription.classList.toggle("active");
      artImage.classList.toggle("active");
      artOrigin.classList.toggle("active");
    });
    // add genders as classes to each container
    var artGender = art.fields.gender;
    artGender.forEach(function (gender) {
      artContainer.classList.add(gender);
    });
    //add event listener to our filter
    //to add an active class to our song
    //add event listener to our filter
    //to add an active class to our song
    var filterMale = document.querySelector(".leader");
    filterMale.addEventListener("click", function () {
      if (artContainer.classList.contains("leader")) {
        artContainer.style.display = "block";
      } else {
        artContainer.style.display = "none";
      }
    });
    var filterFemale = document.querySelector(".NPC");
    filterFemale.addEventListener("click", function () {
      if (artContainer.classList.contains("NPC")) {
        artContainer.style.display = "block";
      } else {
        artContainer.style.display = "none";
      }
    });
  });
}









