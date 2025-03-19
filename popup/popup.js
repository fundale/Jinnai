chrome.tabs.query({
    active: true,
    currentWindow: true
}, tab => {

    nexto.addEventListener("click", function () {

        let url = tab[0].url;
        if (url.includes("youtube.com/watch?v=")) {

            let notTube = url.split("&")[0];
            let NexTo = `${notTube}`; // https://nextnex.com/?url=
            navigator.clipboard.writeText(NexTo);

        }

    });

    youtube.addEventListener("click", function () {

        let url = tab[0].url;
        if (url.includes("youtube.com/watch?v=")) {

            let notTube = url.split("&")[0];
            navigator.clipboard.writeText(notTube);

        }

    });

});