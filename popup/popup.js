chrome.tabs.query({
    active: true,
    currentWindow: true
}, tab => {

    nexto.addEventListener("click", function () {

        let url = tab[0].url;
        if (url.includes("youtube.com/watch?v=")) {

            let notTube = url.split("&")[0];
            let NexTo = `https://t-ne.x0.to/?url=${notTube}`;
            navigator.clipboard.writeText(NexTo);

        }

    });

});