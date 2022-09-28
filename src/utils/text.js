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
  }
}
