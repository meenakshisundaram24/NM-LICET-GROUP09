let id;
let price;
let name;
let quantity;
let brand;
let current_inventory = {
    1:{
        id:1101,
        name: "Acer Nitro 7",
        brand: "Acer",
        price: 1000,
        quantity: 10,
    },
    2: {
        id:1102,
        name: "Asus ROG Strix",
        brand: "Asus",
        price: 1200,
        quantity: 5,
    },
    3: {
        id:1103,
        name: "MSI GL65 Leopard",
        brand: "MSI",
        price: 1500,
        quantity: 3,
    },
    4: {
        id:1104,
        name: "Lenovo Legion Y540",
        brand: "Lenovo",
        price: 1300,
        quantity: 7,
    },
    5: {
        id:1105,
        name: "HP Omen 15",
        brand: "HP",
        price: 1100,
        quantity: 8,
    }
};
let current_inventory_length=0;

function is_empty(string) {
    if (string.length == 0) {
        return true;
    }
    return false;
}

function getIndex(tbody) {
    let index = tbody.children.length || 0;
    return index;
}


function d1(){
    document.querySelector("#current_inventory_list").innerHTML = "";
    tbody = document.querySelector("#current_inventory_list");
    for (let i in current_inventory)  
    {
        if(current_inventory[i]!=0)
        {
            current_inventory_length++;
        let w=current_inventory[i];
        console.log(w); 
        let tr = `<tr>
        <th scope='row'>${getIndex(tbody) + 1}</th>
        <td>${w.name}</td>
        <td>${w.brand}</td>
        <td>${w.quantity}</td>
        <td>$${w.price}</td>`;
        tbody.innerHTML += tr;

        }
        
    }
}

function d2(){
    current_inventory_length=0;
    document.querySelector("#update_list").innerHTML = "";
    tbody = document.querySelector("#update_list");
    display(tbody);
}
function d3()
{
    current_inventory_length=0;
    document.querySelector("#add_list").innerHTML = "";
    tbody = document.querySelector("#add_list");
    display(tbody);   
}

function display(tbody){
    for (let i in current_inventory)  
    {
        if(current_inventory[i]!=0)
        {
            current_inventory_length++;
            let w=current_inventory[i];
            let tr = `<tr>
            <th scope='row'>${w.id}</th>
            <td>${w.name}</td>
            <td>${w.brand}</td>
            <td>${w.quantity}</td>
            <td>$${w.price}</td>`;
            tbody.innerHTML += tr;
        }
    }
}

function update()
{
    let id=document.getElementById("product_id").value;
    let quantity=document.getElementById("product_quantity").value;
    let price=document.getElementById("product_price").value;

    for(let i in current_inventory)
    {
        if(current_inventory[i].id==id)
        {
            if(price!="" && quantity!="")
            {
                current_inventory[i].price=price;
                current_inventory[i].quantity=quantity;
            }
            else if(price=="")
                current_inventory[i].quantity=quantity;
            else    
                current_inventory[i].price=price;
        }
    }
    d2();
}

function add()
{
    id=document.getElementById("aproduct_id").value;
    quantity=document.getElementById("aproduct_quantity").value;
    price=document.getElementById("aproduct_price").value;
    let name=document.getElementById("aproduct_name").value;
    brand=document.getElementById("aproduct_brand").value;
    current_inventory_length++;
    current_inventory[current_inventory_length]={};
    current_inventory[current_inventory_length]["id"]=id;
    current_inventory[current_inventory_length]["quantity"]=quantity;
    current_inventory[current_inventory_length]["price"]=price;
    current_inventory[current_inventory_length]["name"]=name;
    current_inventory[current_inventory_length]["brand"]=brand;  
    d3();
}

function del()
{
    id=document.getElementById("dproduct_id").value;
    for(let i in current_inventory)
    {
        if(current_inventory[i].id==id)
        {
            current_inventory[i]=0;
        }
    }
    d3();
}