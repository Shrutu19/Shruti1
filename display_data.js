display_data.js;

$(document).ready(function () {

    getData();

});



function getData() {

    let localStorageData = localStorage.getItem("student");

    let studentObj = JSON.parse(localStorageData);

    console.log(studentObj);

    $("#rollno").text(studentObj.rollno);

    $("#firstName").text(studentObj.firstName);

    $("#lastName").text(studentObj.lastName);

    $("#dob").text(studentObj.dob);

    // $("#gender").text(studentObj.gender);

    $("#email").text(studentObj.email);

    $("#contactNo").text(studentObj.contactNo);

    $("#registrationDate").text(studentObj.registrationDate);

}