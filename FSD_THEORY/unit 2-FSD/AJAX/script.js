function loadData() {

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let obj = JSON.parse(this.responseText);

            document.getElementById("demo").innerHTML =
                obj.name + "<br>" +
                obj.course + "<br>" +
                obj.year;
        }
    };

    xhr.open("GET", "data.json", true);
    xhr.send();
}