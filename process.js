// chrome.browserAction.onClicked.addListener(function() {

//     chrome.tabs.create({ 'url': chrome.extension.getURL('popup.html') }, function(tab) {
//         alert("new tab");
//     });

// });



// chrome.tabs.onCreated.addListener(function() {
//     alert("new tab");
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

//         var currTab = tabs[0];
//         if (currTab) {

//             currTab.addEventListener("load", function() {
//                 win.document.body.style.backgroundColor = "yellow";
//             });
//             // Sanity check
//             //currTab.backgroundColor = "red";
//             // currTab.document.body.style.backgroundColor = "green";
//             //document.body.style.backgroundColor = "green";
//         }
//     });

// });


function loadHome() {
    //chrome.tabs.update({ url: "popup.html" });
    if (tab.url === 'chrome://newtab/') {

        // Show your website. This might highlight the omnibox,
        // but it's not guaranteed.
        chrome.tabs.update(tab.id, { url: 'https://ucsc.cmb.ac.lk/' });
    }


    //window.open('https://ucsc.cmb.ac.lk/', '_self', false);
}

chrome.tabs.onCreated.addListener(function() {
    loadHome();

});

// chrome.tabs.onCreated.addListener(function(tab) {

//     // Only redirect if this is a blank new tab (not opened by clicking a link).
//     if (tab.url === 'chrome://newtab/') {

//         // Show your website. This might highlight the omnibox,
//         // but it's not guaranteed.
//         chrome.tabs.update(tab.id, { url: 'https://example.com' });
//     }
// });


// Called when the user clicks on the browser action.
// chrome.tabs.onCreated.addListener(function(tab) {
//     // No tabs or host permissions needed!
//     console.log('Turning ' + tab.url + ' red!');
//     chrome.tabs.executeScript({
//         code: 'document.body.style.backgroundColor="red"'
//     });
// });