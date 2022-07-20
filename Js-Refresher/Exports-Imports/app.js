//When something is set as the export default in a class, that is what will be imported automatically when the import is called. Ex:Person.js

import Person from "./Person.js";


//When a default export is not stated, imports must be called directly by name with the imported utility name in curly brackets Ex: utility.js

import {clean} from "./utility";

import {baseData} from "./utility";

clean();