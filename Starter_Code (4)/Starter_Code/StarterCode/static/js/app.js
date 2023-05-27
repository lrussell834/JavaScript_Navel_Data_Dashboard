// get the naval endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
let navalData
// fetch the JSON data and console log it
d3.json(url).then(function(data) {
  navalData = data
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
optionChanged(namesArray[0])
});
function demoData(id) {
  // Fill in demographic Chart
  let metaData = navalData.metadata;
  const metaInfo = metaData.find(dict => dict.id == id);

const demoInfo = d3.select('.panel-body');
demoInfo.html("")
demoInfo.append('p').text(`id: ${metaInfo.id}`)
demoInfo.append('p').text(`ethnicity: ${metaInfo.ethnicity}`)
demoInfo.append('p').text(`gender: ${metaInfo.gender}`)
demoInfo.append('p').text(`age: ${metaInfo.age}`)
demoInfo.append('p').text(`location: ${metaInfo.location}`)
demoInfo.append('p').text(`bbtype: ${metaInfo.bbtype}`)
demoInfo.append('p').text(`wfreq: ${metaInfo.wfreq}`)
}

function barChart(id) {

  // Get sample array for charting
  let sampleData = navalData.samples;
  const sampleInfo = sampleData.find(dict => dict.id == id);
  console.log(sampleInfo)
  // create default bar chart with first sample
  
  // Slice the first 10 objects for plotting
  //var x = sampleArray.slice(0,10).reverse();
  // Reverse the array to accommodate Plotly's defaults

  //   data = [{
  //     x: ,
  //     y: ,
  //     text: ,
  //     type: 'bar',
  //     orientation: 'h'
  //   }]
  
  //   Plotly.newPlot('plot', data); 
    
}

function optionChanged(id) {
demoData(id)
barChart(id)
}


