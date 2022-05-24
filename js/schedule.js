//button to change the classes
document.getElementById("button").addEventListener("click", replaceLines);

//This function replaces all of the lines with the correct school class
function replaceLines()
{
  //This is just so the office hours lines also double in size so the schedule looks less weird
  document.getElementById("blankA").innerHTML = document.getElementById("classOne").value;
  document.getElementById("blankB").innerHTML = document.getElementById("classOne").value;
  document.getElementById("blankC").innerHTML = document.getElementById("classTwo").value;
  document.getElementById("blankD").innerHTML = document.getElementById("classOne").value;
  document.getElementById("blankE").innerHTML = document.getElementById("classThree").value;
  document.getElementById("blankF").innerHTML = document.getElementById("classOne").value;
  document.getElementById("blankG").innerHTML = document.getElementById("classOne").value;
  document.getElementById("blankH").innerHTML = document.getElementById("classTwo").value;
  //If the input box is empty, print the saved variable to the schedule. If there is something typed into the box, save it to the variable and print it to the schedule
  if(document.getElementById("classOne").value.length == 0)
  {
    document.getElementById("oneA").innerHTML = localStorage.getItem("classOneConst");
    document.getElementById("oneB").innerHTML = localStorage.getItem("classOneConst");
    document.getElementById("oneD").innerHTML = localStorage.getItem("classOneConst");
    document.getElementById("oneF").innerHTML = localStorage.getItem("classOneConst");
    document.getElementById("oneG").innerHTML = localStorage.getItem("classOneConst");
  }
  else
  {
    let oneConst = document.getElementById("classOne").value;
    localStorage.setItem("classOneConst",oneConst);
    document.getElementById("oneA").innerHTML = document.getElementById("classOne").value;
    document.getElementById("oneB").innerHTML = document.getElementById("classOne").value;
    document.getElementById("oneD").innerHTML = document.getElementById("classOne").value;
    document.getElementById("oneF").innerHTML = document.getElementById("classOne").value;
    document.getElementById("oneG").innerHTML = document.getElementById("classOne").innerHTML;
  }
  if(document.getElementById("classTwo").value.length == 0)
  {
    document.getElementById("oneC").innerHTML = localStorage.getItem("classTwoConst");
    document.getElementById("oneH").innerHTML = localStorage.getItem("classTwoConst");
    document.getElementById("twoA").innerHTML = localStorage.getItem("classTwoConst");
    document.getElementById("twoD").innerHTML = localStorage.getItem("classTwoConst");
    document.getElementById("twoF").innerHTML = localStorage.getItem("classTwoConst");
  }
  else
  {
    let twoConst = document.getElementById("classTwo").value;
    localStorage.setItem("classTwoConst",twoConst);
    document.getElementById("oneC").innerHTML = document.getElementById("classTwo").value;
    document.getElementById("oneH").innerHTML = document.getElementById("classTwo").value;
    document.getElementById("twoA").innerHTML = document.getElementById("classTwo").value;
    document.getElementById("twoD").innerHTML = document.getElementById("classTwo").value;
    document.getElementById("twoF").innerHTML = document.getElementById("classTwo").value;
  }
  if(document.getElementById("classThree").value.length == 0)
  {
    document.getElementById("oneE").innerHTML = localStorage.getItem("classThreeConst");
    document.getElementById("twoC").innerHTML = localStorage.getItem("classThreeConst");
    document.getElementById("twoH").innerHTML = localStorage.getItem("classThreeConst");
    document.getElementById("threeA").innerHTML = localStorage.getItem("classThreeConst");
    document.getElementById("threeF").innerHTML = localStorage.getItem("classThreeConst");
  }
  else
  {
    let threeConst = document.getElementById("classThree").value;
    localStorage.setItem("classThreeConst",threeConst);
    document.getElementById("oneE").innerHTML = document.getElementById("classThree").value;
    document.getElementById("twoC").innerHTML = document.getElementById("classThree").value;
    document.getElementById("twoH").innerHTML = document.getElementById("classThree").value;
    document.getElementById("threeA").innerHTML = document.getElementById("classThree").value;
    document.getElementById("threeF").innerHTML = document.getElementById("classThree").value;
  }
  if(document.getElementById("classFour").value.length == 0)
  {
    document.getElementById("twoB").innerHTML = localStorage.getItem("classFourConst");
    document.getElementById("twoE").innerHTML = localStorage.getItem("classFourConst");
  document.getElementById("twoG").innerHTML = localStorage.getItem("classFourConst");
    document.getElementById("threeC").innerHTML = localStorage.getItem("classFourConst");
    document.getElementById("threeH").innerHTML = localStorage.getItem("classFourConst");
  }
  else
  {
    let fourConst = document.getElementById("classFour").value;
    localStorage.setItem("classFourConst",fourConst);
    document.getElementById("twoB").innerHTML = document.getElementById("classFour").value;
    document.getElementById("twoE").innerHTML = document.getElementById("classFour").value;
  document.getElementById("twoG").innerHTML = document.getElementById("classFour").value;
    document.getElementById("threeC").innerHTML = document.getElementById("classFour").value;
    document.getElementById("threeH").innerHTML = document.getElementById("classFour").value;
  }
  if(document.getElementById("classFive").value.length == 0)
  {
    document.getElementById("threeB").innerHTML = localStorage.getItem("classFiveConst");
    document.getElementById("threeD").innerHTML = localStorage.getItem("classFiveConst");
    document.getElementById("threeE").innerHTML = localStorage.getItem("classFiveConst");
    document.getElementById("threeG").innerHTML = localStorage.getItem("classFiveConst");
    document.getElementById("fourC").innerHTML = localStorage.getItem("classFiveConst");
  }
  else
  {
    let fiveConst = document.getElementById("classFive").value;
    localStorage.setItem("classFiveConst",fiveConst);
    document.getElementById("threeB").innerHTML = document.getElementById("classFive").value;
    document.getElementById("threeD").innerHTML = document.getElementById("classFive").value;
    document.getElementById("threeE").innerHTML = document.getElementById("classFive").value;
    document.getElementById("threeG").innerHTML = document.getElementById("classFive").value;
    document.getElementById("fourC").innerHTML = document.getElementById("classFive").value;
  }
  if(document.getElementById("classSix").value.length == 0)
  {
    document.getElementById("fourA").innerHTML = localStorage.getItem("classSixConst");
    document.getElementById("fourB").innerHTML = localStorage.getItem("classSixConst");
    document.getElementById("fourD").innerHTML = localStorage.getItem("classSixConst");
    document.getElementById("fourF").innerHTML = localStorage.getItem("classSixConst");
    document.getElementById("fourG").innerHTML = localStorage.getItem("classSixConst");
  }
  else
  {
    let sixConst = document.getElementById("classSix").value;
    localStorage.setItem("classSixConst",sixConst);
    document.getElementById("fourA").innerHTML = document.getElementById("classSix").value;
    document.getElementById("fourB").innerHTML = document.getElementById("classSix").value;
    document.getElementById("fourD").innerHTML = document.getElementById("classSix").value;
    document.getElementById("fourF").innerHTML = document.getElementById("classSix").value;
    document.getElementById("fourG").innerHTML = document.getElementById("classSix").value;
  }
  if(document.getElementById("classSeven").value.length == 0)
  {
    document.getElementById("fourE").innerHTML = localStorage.getItem("classSevenConst");
    document.getElementById("fourH").innerHTML = localStorage.getItem("classSevenConst");
    document.getElementById("fiveA").innerHTML = localStorage.getItem("classSevenConst");
    document.getElementById("fiveC").innerHTML = localStorage.getItem("classSevenConst");
    document.getElementById("fiveF").innerHTML = localStorage.getItem("classSevenConst");
  }
  else
  {
    let sevenConst = document.getElementById("classSeven").value;
    localStorage.setItem("classSevenConst",sevenConst);
    document.getElementById("fourE").innerHTML = document.getElementById("classSeven").value;
    document.getElementById("fourH").innerHTML = document.getElementById("classSeven").value;
    document.getElementById("fiveA").innerHTML = document.getElementById("classSeven").value;
    document.getElementById("fiveC").innerHTML = document.getElementById("classSeven").value;
    document.getElementById("fiveF").innerHTML = document.getElementById("classSeven").value;
  }
  //eights
  if(document.getElementById("classEight").value.length == 0)
  {
    document.getElementById("fiveB").innerHTML = localStorage.getItem("classEightConst");
  document.getElementById("fiveD").innerHTML = localStorage.getItem("classEightConst");
  document.getElementById("fiveE").innerHTML = localStorage.getItem("classEightConst");
  document.getElementById("fiveG").innerHTML = localStorage.getItem("classEightConst");
  document.getElementById("fiveH").innerHTML = localStorage.getItem("classEightConst");
  }
  else
  {
    let eightConst = document.getElementById("classEight").value;
    localStorage.setItem("classEightConst",eightConst);
    document.getElementById("fiveB").innerHTML = document.getElementById("classEight").value;
  document.getElementById("fiveD").innerHTML = document.getElementById("classEight").value;
  document.getElementById("fiveE").innerHTML = document.getElementById("classEight").value;
  document.getElementById("fiveG").innerHTML = document.getElementById("classEight").value;
  document.getElementById("fiveH").innerHTML = document.getElementById("classEight").value;
  }
  
}
