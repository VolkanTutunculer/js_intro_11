let carvanaLoaded = fasle;
let financingLoaded = fasle;
let headingVisible = fasle;

function gotoCarvana() {
  setTimeout(() => {
    console.log("Carvana website is loaded...");
    carvanaLoaded = true;
  }, 500);
}

function clickOnFinancing() {
  setTimeout(() => {
    console.log("Carvana finincing page loaded");
    financingLoaded = true
  }, 1000);
}

function validateHeading(expected) {
  setTimeout(() => {
    console.log(`${expected} heading is loaded...`);
    headingVisible = true
  }, 750);
}

function test1() {
  gotoCarvana();
  clickOnFinancing();
  validateHeading('FINANCING MADE EASY');
}

test1();
