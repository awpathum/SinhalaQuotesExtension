document.addEventListener("DOMContentLoaded", () => {
    data = '[{"filename": "./backgrounds/lion.jpg","id": "animal01"},{"filename": "./backgrounds/girl.jpg","id": "girl01"},{"filename": "./backgrounds/motivate.jpg","id": "motivation01"},{"filename": "./backgrounds/motivate2.jpg","id": "motivation02"},{"filename": "./backgrounds/flowers.jpg","id": "animal01"},{"filename": "./backgrounds/cute.jpg","id": "animal01"},{"filename": "./backgrounds/beach.jpg","id": "animal01"},{"filename": "./backgrounds/car.jpg","id": "animal01"},{"filename": "./backgrounds/space.jpg","id": "animal01"},{"filename": "./backgrounds/synthetic.jpg","id": "animal01"},{"filename": "./backgrounds/winter.jpg","id": "animal01"}]';
    var mydata = JSON.parse(data);
    var imageId = Math.floor((Math.random() * 10) + 1);

    document.body.style.backgroundImage = `url(${mydata[imageId].filename})`;

    document.getElementById("submitbutton").disabled = true;
    document.getElementById('textbox').addEventListener(
        "change", () => {
            var txtVal = document.getElementById("textbox").value;
            console.log(txtVal);
            // document.getElementById("submitbutton").disabled = false;
            if (txtVal == "") {

                document.getElementById("submitbutton").disabled = true;
            } else {
                document.getElementById("submitbutton").disabled = false;
            }
        },

    );

    // document.getElementById('element_id').addEventListener(
    //     'change',
    //     callbackFunction,
    //     false
    //   );

    // document.getElementById('textbox').onchange = function() {
    //     var txtVal = document.getElementById("textbox").value;
    //     console.log(txtVal);
    //     if (txtVal == "" || txtVal == "Google Search") {

    //         document.getElementById("submitbutton").disabled = true;
    //     } else {
    //         document.getElementById("submitbutton").disabled = false;
    //     }
    // };




    //Mon Nov 11 2019 17:35:56 GMT+0530 (India Standard Time) 

    var d = new Date();
    var n = d.toString();

    var time = n.substring(16, 21);
    document.getElementById("time").innerHTML = time;


    //for date display

    // var day = n.substring(0, 3);
    // console.log(day);
    // switch (day) {
    //     case 'Mon':
    //         document.getElementById("date").innerHTML = "Monday";
    //         break;
    //     case 'Tue':
    //         document.getElementById("date").innerHTML = "Tuesday";
    //         break;
    //     case 'Wed':
    //         document.getElementById("date").innerHTML = "Wednesday";
    //         break;
    //     case 'Thu':
    //         document.getElementById("date").innerHTML = "Thursday";
    //         break;
    //     case 'Fri':
    //         document.getElementById("date").innerHTML = "Friday";
    //         break;
    //     case 'Sat':
    //         document.getElementById("date").innerHTML = "Saturday";
    //         break;
    //     case 'Sun':
    //         document.getElementById("date").innerHTML = "Sunday";
    //         break;
    //     default:
    //         document.getElementById("date").innerHTML = "Check your connection";
    // }


    var curHr = d.getHours();

    if (curHr < 12) {
        document.getElementById("greeting").innerHTML = "Good Morning";
    } else if (curHr < 18) {
        document.getElementById("greeting").innerHTML = "Good Afternoon";
    } else {
        document.getElementById("greeting").innerHTML = "Good Evening";
    }


});