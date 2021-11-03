//toastr options
toastr.options.timeOut = 0;
toastr.options.extendedTimeOut = 0;

function getString(args){
    if (typeof args[0] != 'string' || args[1]) {
        return JSON.stringify(args);
    }
    else {
        return args[0];
    }
}

// console.log
console.defaultLog = console.log.bind(console);
console.log = function(...args) {
    console.defaultLog.apply(console, args);
    toastr.info(getString(args));
};
// console.error
console.defaultError = console.error.bind(console);
console.error = function(...args) {
    console.defaultError.apply(console, args);
    toastr.error(getString(args));
};
// console.warn
console.defaultWarn = console.warn.bind(console);
console.warn = function(...args) {
    console.defaultWarn.apply(console, args);
    toastr.warning(getString(args));
};