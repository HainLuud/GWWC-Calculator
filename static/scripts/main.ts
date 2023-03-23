import * as d3 from "d3";
//import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
// // this tells TypeScript that there is a global variable called d3 that is of type any. 
// declare var d3: any;
// declare var topojson: any;

function importMappingData() {
    console.log("importMappingData");
    console.log("d3", d3);
	console.log("topojson");
}



const svg = d3.select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

function whenDocumentLoaded(action) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", action);
	} else {
		// `DOMContentLoaded` already fired
		action();
	}
}

whenDocumentLoaded(() => {

	importMappingData();

});
