chrome.tabs.query({
    active: true,
    currentWindow: true
}, tab => {

    nexto.addEventListener("click", function () {

        let url = tab[0].url;
        if (url.includes("youtube.com/watch?v=")) {

            let notTube = url.split("&")[0];
            let NexTo = `https://nextnex.com/?url=${notTube}`;
            navigator.clipboard.writeText(NexTo);

        }

    });

});