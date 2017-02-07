var d3 = require("d3")

d3.tsv("http://localhost:3000/static/js/data.tsv", function(data){
    console.log(data)
})