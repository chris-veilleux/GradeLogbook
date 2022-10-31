function saveClassName() {
    // get the desired name of the new class from the form
    var newClassName = document.getElementById('newClassName').value;
    
    // initialize an array to hold the class names
    var classes = [];

    // if the localStorage item "classes" already exists, then get the current list of classes and populate the classes array with it
    if (localStorage.getItem("classes") != null) {
        classes = JSON.parse(localStorage.getItem("classes"));
    }

    // append the new class name to the array IF it doesn't already exist in the array
    if (classes.indexOf(newClassName) === -1) {
        classes.push(newClassName);


        if (typeof(Storage) !== "undefined") {
            // set the localStorage item
            localStorage.setItem("classes", JSON.stringify(classes));

            alert("Success!");
        }
        else {
            document.write("Sorry, your browser does not support Web Storage...");
        }
    } else {
        alert("You may not enter duplicate classes.");
    }             
}


function deleteClass(classToDelete) {
    // get the index of the item to be removed from the array
    var indexToDelete = classNames.indexOf(classToDelete);
    
    // remove the item at that index
    if (indexToDelete > -1) {
        
        classNames.splice(indexToDelete,1)
        
    }

    // resave the array to the localStorage object
    localStorage.setItem("classes", JSON.stringify(classNames));
    
    alert(classToDelete+" deleted.");
    location.reload();
}