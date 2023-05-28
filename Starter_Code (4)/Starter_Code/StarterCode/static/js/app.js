// get the naval endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
// set global variable
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

// Create function to fill in demographic data chart
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

// Create function for bar chart
function barChart(id) {

  // Get sample array for charting
  let sampleData = navalData.samples;
  const sampleInfo = sampleData.find(dict => dict.id == id);
  
  // Slice the first 10 objects for plotting and Reverse the array to accommodate Plotly's defaults
  var x = sampleInfo.sample_values.slice(0,10).reverse();
  var y = sampleInfo.otu_ids.map(object => `OTU ${object}`).slice(0,10).sort((a, b) => b - a).reverse();
  var text = sampleInfo.otu_labels.map(object => `${object}`).slice(0,10).sort((a, b) => b - a).reverse();

  // Bar graph data and layout
  let data = [{
    x: x,
    y: y,
    text: text,
    type: 'bar',
    orientation: 'h'
  }];
  
  let layout = {
    title: "Top ten Belly Button OTUs",
    bargap: 0.05,
  };
  
  Plotly.newPlot('bar', data, layout); 

// Create function for bubble chart   
}
function bubbleChart(id) {

  // Get sample array for charting
  let sampleData = navalData.samples;
  const sampleInfo = sampleData.find(dict => dict.id == id);

  // Bubble graph data and layout
  let data = [{
    x: sampleInfo.otu_ids,
    y: sampleInfo.sample_values,
    text : sampleInfo.otu_labels.map(object => `${object}`),
    mode: 'markers',
    marker: {
      color: sampleInfo.otu_ids,
      size: sampleInfo.sample_values
    }
  }];
  
  let layout = {
    title: "Subject Belly Button Biodiversity",
    xaxis: {
      title:{
        text: 'OTU ID'
      }
    }
  };
  
  Plotly.newPlot('bubble', data, layout); 
    
}

function optionChanged(id) {
demoData(id)
barChart(id)
bubbleChart(id)
}


