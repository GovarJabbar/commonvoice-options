cd C:\\Users\\govar\\Desktop\\Apps\\commonvoice-options\\dist\\firefox\\js;
sed -i 's/chrome.runtime/browser.runtime/g' *.js;
sed -i 's/chrome.storage/browser.storage/g' *.js;
sed -i 's/chrome.windows/browser.windows/g' *.js;
sed -i 's/chrome.tabs/browser.tabs/g' *.js;
