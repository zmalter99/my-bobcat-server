//need to add event listener for original row
document.querySelector(".GPAClass").addEventListener("keyup", saveGPA);
document.querySelector(".GPACredits").addEventListener("change", saveGPA);
document.querySelector(".GPAGrade").addEventListener("change", saveGPA);

//add GPA row
function addGPARow() {
    //create duplicate
    let GPAItem = document.querySelector(".GPAItem").outerHTML;
    document.querySelector("#GPAItems").insertAdjacentHTML("beforeend", GPAItem);
    //reset values
    document.querySelector(".GPAItem:last-child > .GPAClass").value = "";
    document.querySelector(".GPAItem:last-child > .GPACredits").selectedIndex = 0;
    document.querySelector(".GPAItem:last-child > .GPAGrade").selectedIndex = 0;
    //add evenet listener to save
    document.querySelector(".GPAItem:last-child > .GPAClass").addEventListener("keyup", saveGPA);
    document.querySelector(".GPAItem:last-child > .GPACredits").addEventListener("change", saveGPA);
    document.querySelector(".GPAItem:last-child > .GPAGrade").addEventListener("change", saveGPA);
}
document.querySelector("#GPAAdd").addEventListener("click", addGPARow);

//remove GPA row
document.querySelector("#GPARemove").addEventListener("click", function () {
    if (document.querySelectorAll(".GPAItem").length == 1) {
        document.querySelector(".GPAClass").value = "";
        document.querySelector(".GPACredits").selectedIndex = 0;
        document.querySelector(".GPAGrade").selectedIndex = 0;
    } else {
        document.querySelector(".GPAItem:last-child").remove();
    }
    saveGPA();
});

//save GPA
function saveGPA() {
    let GPA = [];
    document.querySelectorAll(".GPAItem").forEach(function (element) {
        GPA.push([
            element.children[0].value,
            element.children[1].options[element.children[1].selectedIndex].value,
            element.children[2].options[element.children[2].selectedIndex].value
        ]);
    });
    localStorage.GPA = JSON.stringify(GPA);
}

//check if saved GPA
if (localStorage.GPA) {
    let GPA = JSON.parse(localStorage.GPA);
    //add correct amoutn of rows
    while (document.querySelectorAll(".GPAItem").length != GPA.length) {
        addGPARow();
    }
    //append data
    GPA.forEach(function (row, index) {
        (document.querySelectorAll(".GPAClass")[index]).value = row[0];
        for (let i = 0; i < document.querySelector(".GPACredits").options.length; i++) {
            if (document.querySelector(".GPACredits").options[i].value == row[1]) {
                (document.querySelectorAll(".GPACredits")[index]).selectedIndex = i;
                break;
            }
        }
        for (let i = 0; i < document.querySelector(".GPAGrade").options.length; i++) {
            if (document.querySelector(".GPAGrade").options[i].value == row[2]) {
                (document.querySelectorAll(".GPAGrade")[index]).selectedIndex = i;
                break;
            }
        }
    });
}

//calcualte gpa
document.querySelector("#GPACalculate").addEventListener("click", function () {
    let totalCredits = 0;
    let totalGrade = 0;
    document.querySelectorAll(".GPACredits").forEach(function (element) {
        //make sure both drop downs are filled out
        if (element.options[element.selectedIndex].value != "" && element.nextElementSibling.options[element.nextElementSibling.selectedIndex].value != "") {
            totalCredits += parseFloat(element.options[element.selectedIndex].value);
            totalGrade += parseFloat(element.nextElementSibling.options[element.nextElementSibling.selectedIndex].value) * parseFloat(element.options[element.selectedIndex].value);
        }
    });
    //check if anything is filled out
    if (totalCredits == 0) {
        swal("Please fill out your grades to calculate your GPA.");
    } else {
        swal("Your GPA is: " + (totalGrade / totalCredits).toFixed(3));
    }
});

/*--------------------------------------------------------*/
//Final Grade

document.querySelector("#finalGradeButton").addEventListener("click", function () {
    let totalGrade = 0;
    let totalQuarters = 0;

    //total everything
    document.querySelectorAll(".finalGradeSelect").forEach(function (element) {
        if (element.options[element.selectedIndex].value != "") {
            totalGrade += parseFloat(element.options[element.selectedIndex].value);
            totalQuarters++;
        }
    });

    //check if any drop downs are filled out
    if (totalQuarters == 0) {
        swal("I think you forget to fill our your grades..");
        return;
    }

    let finalGrade = totalGrade / totalQuarters;
    if (finalGrade >= 4.30 && finalGrade <= 4.60) {
        swal("Your grade is: A+");
    } else if (finalGrade >= 3.80 && finalGrade <= 4.29) {
        swal("Your grade is: A");
    } else if (finalGrade >= 3.30 && finalGrade <= 3.79) {
        swal("Your grade is: B+");
    } else if (finalGrade >= 2.80 && finalGrade <= 3.29) {
        swal("Your grade is: B");
    } else if (finalGrade >= 2.30 && finalGrade <= 2.79) {
        swal("Your grade is: C+");
    } else if (finalGrade >= 1.50 && finalGrade <= 2.29) {
        swal("Your grade is: C");
    } else if (finalGrade >= 0.80 && finalGrade <= 1.49) {
        swal("Your grade is: D");
    } else if (finalGrade >= 0.00 && finalGrade <= 0.79) {
        swal("Your grade is: F");
    }

});


//navigator for this page
document.querySelectorAll("#calculatorSelector > div").forEach(function (element) {
    element.addEventListener("click", function () {
        if (document.querySelector("#calculatorSelector > div.active")) {
            document.querySelector("#calculatorSelector > div.active").classList.remove("active");
        }
        this.classList.add("active");
        if (this.textContent == "GPA") {
            document.querySelector("#GPA").style.display = "block";
            document.querySelector("#finalGrade").style.display = "none";
        } else {
            document.querySelector("#finalGrade").style.display = "block";
            document.querySelector("#GPA").style.display = "none";
        }
    });
});