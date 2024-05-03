var items = [];
var recordIndex;

$('#customer-section').css({display: 'block'});
$('#item-section').css({display: 'none'});

// student nav management
$('#nav-customer').on('click', () => {
    $('#customer-section').css({display: 'block'});
    $('#item-section').css({display: 'none'});
});

// course nav management
$('#nav-item').on('click', () => {
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'block'});
});

function loadTable() {

    $("#item-tbl-tbody").empty();

    items.map((item, index) => {
        let record = `<tr>
                <td class="item-id-value">${item.id}</td>
                <td class="item-name-value">${item.name}</td>
                <td class="item-price-value">${item.price}</td>
                <td class="item-qty-value">${item.qty}</td>
            </tr>`;
        $("#item-tbl-tbody").append(record);
    });
}

$("#item-save").on('click', () => {

    var  itemId = $('#item-id').val();
    var itemName = $('#item-name').val();
    var  itemPrice = $('#item-price').val();
    var  itemQty = $('#item-qty').val();

    // create an object
    let item = {
        id: itemId,
        name: itemName,
        price: itemPrice,
        qty: itemQty,
    }
    // push to the array
    items.push(item);

    loadTable();
    $("#item-reset").click();
});

$("#item-update").on('click', () => {
    var itemId = $('#item-id').val();
    var itemName = $('#item-name').val();
    var itemPrice = $('#item-price').val();
    var  itemQty = $('#item-qty').val();

    let itemObj = items[recordIndex];
    // let studentObj = {...students[recordIndex]}; // clone object
    itemObj.id = itemId;
    itemObj.name = itemName;
    itemObj.price = itemPrice;
    itemObj.qty = itemQty;

    // console.log("S1: ", studentObj);
    // console.log("S2: ", students[recordIndex]);

    loadTable();
    $("#item-reset").click();
});

$("#item-delete").on('click', () => {
    items.splice(recordIndex, 1);
    loadTable();
    $("#item-reset").click();
});

$("#item-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    console.log("index: ", index);

    let id = $(this).find(".item-id-value").text();
    let name = $(this).find(".item-name-value").text();
    let price = $(this).find(".item-price-value").text();
    let qty = $(this).find(".item-qty-value").text();

    $("#item-id").val(id);
    $("#item-name").val(name);
    $("#item-price").val(price);
    $("#item-qty").val(qty);

})


