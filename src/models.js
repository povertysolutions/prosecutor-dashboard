import data from "../assets/temp-data.json"

var colors = {
 "Black" : "#124E98",
 "White" : "#6979D3",
 "Asian" : "#FFA600",
 "Hispanic" : "#955196",
 "Other" : "#DD5182"
}

var models = {
  getDataBy(field){
    var sorted = {}

    for (var i in data){
      var item = data[i];
      var value = item[field];
      if (sorted[value] == null){
        sorted[value] = [];
      }

      var date = new Date(Date.parse(item["fileDate"]));
      var year = "+" + date.getFullYear().toString();
      if (sorted[value][year] == null){
        sorted[value][year] = 0;
      }
      sorted[value][year] += 1;
    }

    for (var type in sorted){
      sorted[type] = sorted[type].sort((a, b) => (a.year > b.year) ? 1 : -1);
    }

    var output = {};

    for (var type in sorted){
      var formatted = [];
      var years = sorted[type];

      for (var year in years){
        var correctedYear = year.slice(1);
        //console.log(correctedYear);
        formatted.push({"x" : correctedYear, "y" : years[year]})
      }

      formatted.sort((a, b) => (a.x > b.x) ? 1 : -1);

      var color = colors[type];
      console.log(color);
      //output.push( { "data" : formatted, "borderColor": color})

      output[type] = formatted;
      //console.log(sorted[type])
    }

    //console.log(output);

    return output;

    //console.log(sorted)
  }
}

export default models;
