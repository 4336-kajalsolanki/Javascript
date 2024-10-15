let record = []

const saveRecord = () => {
    let userName = document.getElementById('name').value;
    let userPhone = document.getElementById('phone').value;

    if (!userName || !userPhone) {
        alert("All Field Is Required");
        return false;
    }

    let obj = {
        userid: Math.floor(Math.random() * 10000),
        name: userName,
        phone: userPhone,
    };
    record.push(obj);
    alert("Record Submit");
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    viewRecord();
};

const viewRecord = () => {
    document.getElementById("add").style.display = "block";
    document.getElementById("edit").style.display = "none";

    let tbl = "";
    record.map((val, index) => {
        tbl += `
                <tr>
                    <th>${val.userid}</th>
                    <th>${val.name}</th> 
                    <th>${val.phone}</th>
                    <th>
                        <button onclick = "deleteRecord(${val.userid})">Delete</button>
                        <button onclick = "editRecord(${val.userid})">Edit</button>
                    </th>
                </tr>
               `;
    });
    document.getElementById('users').innerHTML = tbl;
};
viewRecord();

const deleteRecord = (id) => {
    let deletedata = record.filter(item => item.userid != id);
    record = deletedata;
    alert("Record Delete");
    // console.log(deletedata);
    viewRecord();
};

const editRecord = (id) => {
    document.getElementById("add").style.display = "none";
    document.getElementById("edit").style.display = "block";

    let single = record.find((val) => val.userid == id);

    document.getElementById('name').value = single.name;
    document.getElementById('phone').value = single.phone;
    document.getElementById('editid').value = single.userid;
};

const updateRecord = () => {
    let uid = document.getElementById("editid").value;
    let userName = document.getElementById("name").value;
    let userPhone = document.getElementById("phone").value;

    let up = record.map((val) => {
        if (val.userid == uid) {
            val.name = userName,
                val.phone = userPhone
        }
        return val;
    })
    record = up;
    alert("Record Update")

    document.getElementById('editid').value = "";
    document.getElementById('name').value = "";
    document.getElementById('phone').value = "";

    viewRecord();
};