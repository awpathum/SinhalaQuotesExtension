document.addEventListener("DOMContentLoaded", () => {
    data = '[{"filename": "./backgrounds/lion.jpg","id": "animal01"},{"filename": "./backgrounds/girl.jpg","id": "girl01"},{"filename": "./backgrounds/motivate.jpg","id": "motivation01"},{"filename": "./backgrounds/motivate2.jpg","id": "motivation02"},{"filename": "./backgrounds/flowers.jpg","id": "animal01"},{"filename": "./backgrounds/cute.jpg","id": "animal01"},{"filename": "./backgrounds/beach.jpg","id": "animal01"},{"filename": "./backgrounds/car.jpg","id": "animal01"},{"filename": "./backgrounds/space.jpg","id": "animal01"},{"filename": "./backgrounds/synthetic.jpg","id": "animal01"},{"filename": "./backgrounds/winter.jpg","id": "animal01"}]';
    var mydata = JSON.parse(data);
    var imageId = Math.floor((Math.random() * 10) + 1);

    document.body.style.backgroundImage = `url(${mydata[imageId].filename})`;

    //document.body.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/homepageextension-5a946.appspot.com/o/girl.jpg?alt=media&token=01ff330c-5246-478b-b393-5971fe7ea6f9')";

    // db.collection('mix').get().then((snapshot) => {
    //     //console.log(snapshot.docs);

    //     snapshot.docs.forEach(doc => {
    //         //console.log(doc.data);
    //         var list = doc.data;
    //         console.log(list);


    //     });
    // });
    var docRef = db.collection("Wallpapers").doc("mix");
    docRef.get().then(function(doc) {
        if (doc.exists) {
            var imageList = doc.data();
            console.log(imageList.file01);
            var i;
            for (i = 0; i < 10; i++) {
                var id = "file" + `${i}`;
                console.log(imageList.file);
            }
            //console.log("Document data:", doc.data());
            //var imageList = doc.data();
            // var imageList = [];
            // imageList = doc.data();
            // console.log(imageList[0].data());
            //console.log(imageList);

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });


});