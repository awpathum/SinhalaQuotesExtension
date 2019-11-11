document.addEventListener("DOMContentLoaded", () => {
    data = '[{"filename": "./backgrounds/lion.jpg","id": "animal01"},{"filename": "./backgrounds/girl.jpg","id": "girl01"},{"filename": "./backgrounds/motivate.jpg","id": "motivation01"},{"filename": "./backgrounds/motivate2.jpg","id": "motivation02"},{"filename": "./backgrounds/flowers.jpg","id": "animal01"},{"filename": "./backgrounds/cute.jpg","id": "animal01"},{"filename": "./backgrounds/beach.jpg","id": "animal01"},{"filename": "./backgrounds/car.jpg","id": "animal01"},{"filename": "./backgrounds/space.jpg","id": "animal01"},{"filename": "./backgrounds/synthetic.jpg","id": "animal01"},{"filename": "./backgrounds/winter.jpg","id": "animal01"}]';
    var mydata = JSON.parse(data);
    var imageId = Math.floor((Math.random() * 10) + 1);

    document.body.style.backgroundImage = `url(${mydata[imageId].filename})`;


    document.getElementById('textbox').addEventListener(
        'change', () => {
            var txtVal = document.getElementById("textbox").value;


            if (txtVal == "") {
                document.getElementById("submitbutton").disabled = true;
            } else {
                document.getElementById("submitbutton").disabled = false;
            }
        }
    );


});