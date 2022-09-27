import languages from "@/../assets/languages.json"
var currentId = languages[0].id;

export default{
  getModel(){
    return languages;
  },
  getId(){
    return currentId;
  },
  get(textModel){
    if (textModel && textModel[currentId]){
      return textModel[currentId];
    }
    return "ERROR - missing text";
  },
  updateLanguage(id){
    currentId = id;
  }
}
