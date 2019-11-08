document.addEventListener("DOMContentLoaded", () => {
    data = '[{"filename": "./backgrounds/lion.jpg","id": "animal01"},{"filename": "./backgrounds/girl.jpg","id": "girl01"},{"filename": "./backgrounds/motivate.jpg","id": "motivation01"},{"filename": "./backgrounds/motivate2.jpg","id": "motivation02"}]';
    var mydata = JSON.parse(data);
    var image = mydata[0].filename;
    alert(mydata[0].filename);
    //alert(mydata[0].age);
    //var pets = '{"pets":[{"name":"jack"},{"name":"john"},{"name":"joe"}]}';
    //var images = '{ "backgrounds": [{"filename": "./backgrounds/lion.jpg","id": "animal01"},{"filename": "./backgrounds/girl.jpg","id": "girl01"},{"filename": "./backgrounds/motivate.jpg","id": "motivation01"},{"filename": "./backgrounds/motivate2.jpg","id": "motivation02"}]}';
    // var images = '{ {"filename": "./backgrounds/lion.jpg","id": "animal01"},{"filename": "./backgrounds/girl.jpg","id": "girl01"},{"filename": "./backgrounds/motivate.jpg","id": "motivation01"},{"filename": "./backgrounds/motivate2.jpg","id": "motivation02"}}';
    document.body.style.backgroundImage = "url(image)";
    // console.log(`I'm ${age} years old!`)

    // var images = JSON.parse(backgrounds);
    // // var mydata = JSON.parse(data);

    // alert(images[0].filename);
});