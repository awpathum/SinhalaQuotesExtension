document.addEventListener("DOMContentLoaded", () => {
    data = '[{"filename": "./backgrounds/lion.jpg","id": "animal01"},{"filename": "./backgrounds/girl.jpg","id": "girl01"},{"filename": "./backgrounds/motivate.jpg","id": "motivation01"},{"filename": "./backgrounds/motivate2.jpg","id": "motivation02"},{"filename": "./backgrounds/flowers.jpg","id": "animal01"},{"filename": "./backgrounds/cute.jpg","id": "animal01"},{"filename": "./backgrounds/beach.jpg","id": "animal01"},{"filename": "./backgrounds/car.jpg","id": "animal01"},{"filename": "./backgrounds/space.jpg","id": "animal01"},{"filename": "./backgrounds/synthetic.jpg","id": "animal01"},{"filename": "./backgrounds/winter.jpg","id": "animal01"}]';
    var mydata = JSON.parse(data);
    //var image = mydata[0].filename;
    // alert(mydata[0].filename);
    //alert(mydata[0].age);
    //var pets = '{"pets":[{"name":"jack"},{"name":"john"},{"name":"joe"}]}';
    //var images = '{ "backgrounds": [{"filename": "./backgrounds/lion.jpg","id": "animal01"},{"filename": "./backgrounds/girl.jpg","id": "girl01"},{"filename": "./backgrounds/motivate.jpg","id": "motivation01"},{"filename": "./backgrounds/motivate2.jpg","id": "motivation02"}]}';
    // var images = '{ {"filename": "./backgrounds/lion.jpg","id": "animal01"},{"filename": "./backgrounds/girl.jpg","id": "girl01"},{"filename": "./backgrounds/motivate.jpg","id": "motivation01"},{"filename": "./backgrounds/motivate2.jpg","id": "motivation02"}}';
    var imageId = Math.floor((Math.random() * 10) + 1);

    document.body.style.backgroundImage = `url(${mydata[imageId].filename})`;
    // var i;
    // for (i = 0; i < data.length; i++) {
    //     document.body.style.backgroundImage = `url(${mydata[i].filename})`;

    // }
    //document.body.style.backgroundImage = `url(${mydata[0].filename})`;
    // console.log(`I'm ${age} years old!`)


    //  `String text ${expression}`

    // var images = JSON.parse(backgrounds);
    // // var mydata = JSON.parse(data);

    // alert(images[0].filename);
});