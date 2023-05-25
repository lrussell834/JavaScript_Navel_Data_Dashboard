// get the naval endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// fetch the JSON data and console log it
d3.json(url).then(function(navalData) {
  console.log(navalData);

// loop through names to create names array
  let names = navalData.names;
  let namesArray = names.map(function(item) {
    return item;
  });

// iterate through namesArray to fill in drop down box
  const numbersDropDown = document.getElementById("selDataset");

  for(let key in namesArray) {
    let option = document.createElement('option');
    option.setAttribute('value', namesArray[key]);

    let optionText = document.createTextNode(namesArray[key]);
    option.append(optionText);

    numbersDropDown.append(option);
  }
// Get sample array for charting
let samples = navalData.samples;
let samplesArray = samples.map(function(item) {
  return item;
});

});



