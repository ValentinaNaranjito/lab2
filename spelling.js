var SpellCorrector = require("spelling-corrector");
 
var spellCorrector = new SpellCorrector();
 
// you need to do this step only one time to load the Dictionary
spellCorrector.loadDictionary();
 
console.log(spellCorrector.correct('sucess'));
 
console.log(spellCorrector.correct('spel'));
