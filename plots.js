//Dom's code from office hours on 12/11/21

console.log("plots.js loaded");

function DrawBarchart(sampleId) {
    console.log(`DrawBarchart(${sampleId})`);

}

function DrawBubblechart(sampleId) {
    console.log(`DrawBubblechart(${sampleId})`);
}

function ShowMetadata(sampleId) {
    console.log(`ShowMetadata(${sampleId})`);
}

function optionChanged(id) {
    console.log(`optionChanged(${id})`);

    DrawBarchart(id);
    DrawBubblechart(id);
    ShowMetadata(id);


}



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

        let sampleId = sampleNames[0];

        DrawBarchart(sampleId);
        DrawBubblechart(sampleId);
        ShowMetadata(sampleId);
    });

}

InitDashboard();

