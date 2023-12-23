
const countryNames = ['United States', 'India', 'France', 'Germany', 'New-York', 'Paris'];
// const placeImages = ['us.jpg', 'india.jpg', 'dubai.jpg', 'germany.jpg', 'ny.jpg', 'paris.jpg'];
let index = 0;

setInterval(() => {
    document.getElementById('visitPlace').textContent = `${countryNames[index]}`;
    // document.getElementsByClassName('main-content').style.backgroundImage = `url(image/${placeImages[index]})`;
    index = (index + 1) % countryNames.length;
}, 500);

function bookNow() {
    var whereto = document.getElementById("whereto").value;
    var persons = document.getElementById("persons").value;
    var startdate = document.getElementById("startdate").value;
    var enddate = document.getElementById("enddate").value;
    var description = document.getElementById("description").value;

    if (whereto != "" && persons != "" && startdate != "" && enddate != "" && description != "") {
        alert("Booking Successful!");
    } else {
        alert("Please fill all the field correctly");
    }
}