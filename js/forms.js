const randomNumber = new Date().getTime();


//Get pre-exisiting data
document.querySelectorAll("form:not(#uploadAd)").forEach(async function (element) {
    let path = `/php/data/${element.getAttribute("file")}?${randomNumber}`;
    let response = await fetch(path).then(function (data) {
        return data.text();
    });

    let firstElement = element.firstElementChild;
    if (firstElement.nodeName == "INPUT") {
        firstElement.setAttribute("placeholder", response);
    } else if (firstElement.nodeName == "TEXTAREA") {
        firstElement.value = response;
    }
})


// form setup
document.querySelectorAll("form:not(#uploadAd)").forEach(function (element) {
    element.addEventListener("submit", function (e) {
        e.preventDefault();

        let formData = new FormData(this);
        formData.set("key", this.getAttribute("key"));

        fetch("https://api.maltertech.com/mybobcat/update.php", {
                method: "POST",
                body: formData
            })
            .then(function (data) {
                return data.json();
            })
            .then(function (data) {
                if (data.error) {
                    alert(data.error);
                } else {
                    alert("Success");
                }
            })

    });
});


document.querySelectorAll("#uploadAd").forEach(function (element) {
    element.addEventListener("submit", function (e) {
        e.preventDefault();

        let formData = new FormData(this);

        fetch("https://api.maltertech.com/mybobcat/uploadAd.php", {
                method: "POST",
                body: formData
            })
            .then(function (data) {
                return data.json();
            })
            .then(function (data) {
                if (data.error) {
                    alert(data.error);
                } else {
                    alert("Success");
                }
            })

    });
});