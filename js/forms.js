//Get pre-exisiting data
fetch("https://api.maltertech.com/mybobcat/get.php")
    .then(data => data.json())
    .then(function (app) {
        document.querySelectorAll("form:not(#uploadAd) > :nth-child(1)").forEach(function (element) {
            let name = app[element.parentElement.getAttribute("key")]
            if (element.nodeName == "INPUT") {
                element.setAttribute("placeholder", name);
            } else if (element.nodeName == "TEXTAREA") {
                element.value = name;
            }
        });
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