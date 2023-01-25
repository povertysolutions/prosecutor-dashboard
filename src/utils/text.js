import languages from "@/../assets/languages.json"
var currentId = languages[0].id;

export default{
  getModel(){
    return languages;
  },
  getId(){
    return currentId;
  },
  get(textModel, langId){
    if (textModel){
      if (langId !== "en"){ //to do -- standin for missing translation
        return "(" + langId + ")" + textModel["en"];
      }
      else{
        return textModel[langId]
      }
    }
    return "ERROR - missing text";
  },
  updateLanguage(id){
    currentId = id;
  },
  //argument -- plain text, glossary model
  //returns -- rich text, returns underlined links to glossary
  checkGlossary(text, glossary, langId){
    console.log(glossary)
    var output = text;

    console.log(output);

    for (var i in glossary){
      var term = glossary[i].term[langId];
      console.log(term);
      output = output.replaceAll(term, "<a href=''>" + term + "</a>");
    }

    return output;
  }

}
