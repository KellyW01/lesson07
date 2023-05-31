// variable for subscription selection
var subTypeElement = document.querySelector("#subscription");

//variable for duration selection
var subDurationElement = document.querySelector("#months");

//variable for result text
var result = document.querySelector(".result");

//variable for selecting 'basic' under subscription to make it the default value
var subType = "basic";
//variable for default months set to 1
var subDuration = 1;

//event listener for subscription button
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

//event listener for duration button
subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
});

// cost change for subscription options
var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  }
  if (subType === "premium") {
    monthlyCost = 10;
  }
  var duration = 1;
  if (subDuration === 6) {
    duration = 6;
  }
  if (duration === 12) {
    duration = 12;
  }

  var total = Number(subDuration * monthlyCost);
  result.innerText = `You have chosen the ${subType} plan for ${subDuration} month(s).  Your total is $${total}.`;
};

