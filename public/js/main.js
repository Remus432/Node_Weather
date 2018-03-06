function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by the browser");
    }
}

function showPosition(position) {
    let long = position.coords.longitude;
    let lat = position.coords.latitude;

    $.ajax({
        url: "/",
        method: "POST",
        dataType: "application/json",
        data: {
            long, lat
        },
        cache: false,
        timeout: 5000,
        complete: () => {
            console.log("Process completed");
        },
        success: data => {
            console.log(data);
            console.log("Process succeeded");
        },
        error: () => {
            console.log("Process error");
        }
    })
    console.log(long, lat);
}

getLocation();