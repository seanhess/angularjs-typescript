///<reference path="../components/DefinitelyTyped/Definitions/jquery-1.8.d.ts"/>

// this is temporary and stupid. to require:
// import jQuery = module('lib/jquery')
// var $ = <JQueryStatic> jQuery

declare module "lib/jquery" {
    // requires the call signature to work for some reason, even though you're casting it
    export function (): JQuery;
}
