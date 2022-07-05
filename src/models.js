import data from "../assets/temp-data.json"

var currentModel = []

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
      output[type] = formatted;
      //console.log(sorted[type])
    }

    //console.log(output);
    currentModel = output;
    return output;

    //console.log(sorted)
  },

  getByDate(dateModel){
    console.log("getByDate...")
    //console.log(dateModel[1]);
    var start = dateModel[0];
    var startDate = new Date(start.year, start.month);
    console.log(startDate)

    var end = dateModel[1];
    var endDate = new Date(end.year, end.month);
    console.log(endDate)

    var output = {};
    console.log(currentModel)
    for (var type in currentModel){
      var filteredArray = [];
      var array = currentModel[type];

      for (var i in array){
        //console.log("date: " + array[i].x);
        var currentDate = new Date(array[i].x, 1);
        //console.log(currentDate)

        if (currentDate >= startDate && currentDate <= endDate){
          filteredArray.push(array[i]);
        }
      }

      output[type] = filteredArray;
    }

    console.log(output);
    return output;
  }
}



export default models;
