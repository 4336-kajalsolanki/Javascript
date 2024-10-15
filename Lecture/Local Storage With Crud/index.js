let record = [];

const viewRecord = () => {
    document.getElementById('edit').style.display = "none";
    document.getElementById('add').style.display = "block";

    let alldata = JSON.parse(localStorage.getItem("users"))
        ? JSON.parse(localStorage.getItem("users"))
        : [];
    let tbl = "";
    alldata.map((val, index) => {
        tbl += `
                <tr>
                    <td>${++index}</td>
                    <td>${val.name}</td>
                    <td>${val.phone}</td>
                    <td>
                        <button onclick = "deleteRecord(${val.userid})">Delete</button> ||
                        <button onclick = "editRecord(${val.userid})">Edit</button>
                    </td>
                </tr>
                
              `;
    });
    document.getElementById('users').innerHTML = tbl;
};
viewRecord();

const saveRecord = () => {
    let Username = document.getElementById('name').value;
    let Userphone = document.getElementById('phone').value;
    let editid = document.getElementById('editid').value;

    let obj = {
        userid: Math.floor(Math.random() * 10000),
        name: Username,
        phone: Userphone,
    };

    if (editid) {
        document.getElementById('edit').style.display = "none";
        let alldata = JSON.parse(localStorage.getItem("users"))
            ? JSON.parse(localStorage.getItem("users"))
            : [];

        let up = alldata.map((val) => {
            if (val.userid == editid) {
                val.name = Username;
                val.phone = Userphone
            }
            return val;
        })
        localStorage.setItem("users", JSON.stringify(up));
        alert("Record Update");
        viewRecord();

        document.getElementById('editid').value = "";
    } else {
        if (
            localStorage.getItem("users") === null ||
            localStorage.getItem("users") === undefined
        ) {
            record.push(obj);
            localStorage.setItem("users", JSON.stringify(record));
            alert("Record Add");
            viewRecord();
        } else {
            let alldata = JSON.parse(localStorage.getItem("users"))
                ? JSON.parse(localStorage.getItem("users"))
                : [];
            alldata.push(obj);
            localStorage.setItem("users", JSON.stringify(alldata));
            alert("Record Add");
            viewRecord();
        }
    }
    document.getElementById('name').value = "";
    document.getElementById('phone').value = "";
};

const deleteRecord = (id) => {
    let alldata = JSON.parse(localStorage.getItem("users"))
        ? JSON.parse(localStorage.getItem("users"))
        : [];

    let d = alldata.filter(val => val.userid != id)
    localStorage.setItem("users", JSON.stringify(d));
    alert("Record Delete");
    viewRecord();
}

const editRecord = (id) => {
    document.getElementById('add').style.display = "none";
    document.getElementById('edit').style.display = "block";

    let alldata = JSON.parse(localStorage.getItem("users"))
        ? JSON.parse(localStorage.getItem("users"))
        : [];

    let single = alldata.find(val => val.userid == id);
    document.getElementById('name').value = single.name
    document.getElementById('phone').value = single.phone
    document.getElementById('editid').value = single.userid

}