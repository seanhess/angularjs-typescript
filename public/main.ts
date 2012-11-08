// EXAMPLE: 
// main.ts: import $ = module("jquery")
// jquery.d.ts: declare module "jquery" { export var ajax: number; }

// OTHER EXAMPLE:
// main.ts: import $ = module("lib/jquery")
// lib/jquery.d.ts: declare module "lib/jquery" { export var ajax: number; }




// This is the best I can do. It sucks
import jQuery = module("lib/jquery")
var $ = <JQueryStatic> jQuery;

import underscore = module("lib/underscore")
var _ = <UnderscoreStatic> underscore;

import ang = module("lib/angular")
var angular = <ng.IAngularStatic> ang;

console.log("CHECK", $.ajax)
console.log("CHECK", $)
console.log("CHECK", _.each)
console.log("CHECK", angular.module)



