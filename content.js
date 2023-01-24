counter = 0;
state = false

document.getElementById('btn-change').addEventListener('click', async evt => {
    counter ++

    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    if (counter%2==0) {
        chrome.scripting.removeCSS({
            target: {
                tabId: tab.id
            },
            files: ["styles.css"],
          },
        () => {});
    } else {
        chrome.scripting.insertCSS({
            target: {
                tabId: tab.id
            },
            files: ["styles.css"],
          },
        () => {});
    }
  });

