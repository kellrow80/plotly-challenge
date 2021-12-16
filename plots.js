//Dom's code from office hours on 12/11/21

console.log("plots.js loaded");



function InitDashboard()
{
    console.log("initializing dashboard");

    let selector = d3.select("#selDataset");

    d3.json("samples.json").then(data => {
        console.log(data);

        let sampleNames = data.names;

        sampleNames.forEach(sampleId => {
            selector.append("option")
            .text(sampleId)
            .property("value",sampleId);


        });
    });
}

InitDashboard();

