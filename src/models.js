import data from "../assets/temp-data.json"

var models = {
  getDataBy(field){
    //console.log(data)
    // if (data[0][field] == undefined){
    //   console.log("field does not exist!")
    //   return;
    // }

    var sorted = {}
    for (var i in data){
      var item = data[i];
      var value = item[field];
      //console.log(data[i]);
      if (sorted[value] == null){
        sorted[value] = [];
      }

      var date = new Date(Date.parse(item["fileDate"]));
      sorted[value].push(date.toISOString())
    }

    var output = [];

    for (var type in sorted){
      //output.push( { "data" : sorted[type]})
      output.push( { "data" : item["fileDate"]})
      //console.log(sorted[type])
    }

    return output;

    //[ { data: [40, 20, 12] } ];

    //console.log(sorted)

  }
}

export default models;
