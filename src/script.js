/*  
*  add toastr and console.js to page
*/

let toastrElem = document.createElement('script');
toastrElem.src = chrome.runtime.getURL('toastr.min.js');
document.documentElement.appendChild(toastrElem);

// wait for above to load
setTimeout(() => {
    let scriptElem = document.createElement('script');
    scriptElem.src = chrome.runtime.getURL('console.js');
    document.documentElement.appendChild(scriptElem);
}, 300);

