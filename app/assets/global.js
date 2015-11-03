'use strict';

// -----------------------------------------------------------------------------------------------------------------
//              KGB Functions
// -----------------------------------------------------------------------------------------------------------------
// this function returns templateUrl based on theme setting
function KgbTemplateUrl(relPath) {
    return 'views/theme-' + KgbEnv.theme + '/' + relPath + '.html';
}


// shorthand of console.log()
function log(content) {
    console.log(content);
}


// shorthand for empty function
function EmptyFunc() {
}


// open new window/tab with given url
function NewWindow(url) {
    window.open(url, '_blank');
}


// remove one item from array
// jQuery is required
function ArrayRemove(array, valueToBeRemoved) {
    return $.grep(array, function (value) {
        return value != valueToBeRemoved;
    });
}
