var customers = [];
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

    $("#customer-tbl-tbody").empty();

    customers.map((item, index) => {
        let record = `<tr>
                <td class="customer-id-value">${item.id}</td>
                <td class="customer-name-value">${item.name}</td>
                <td class="customer-address-value">${item.address}</td>
                <td class="customer-salary-value">${item.salary}</td>
            </tr>`;
        $("#customer-tbl-tbody").append(record);
    });
}

$("#customer-save").on('click', () => {

    var  customerId = $('#customer-id').val();
    var customerName = $('#customer-name').val();
    var customerAddress = $('#customer-address').val();
    var  customerSalary = $('#customer-salary').val();

    // create an object
    let customer = {
        id: customerId,
        name: customerName,
        address: customerAddress,
        salary: customerSalary,
    }
    // push to the array
    customers.push(customer);

    loadTable();
    $("#customer-reset").click();
});

$("#customer-update").on('click', () => {
    var customerId = $('#customer-id').val();
    var customerName = $('#customer-name').val();
    var customerAddress = $('#customer-address').val();
    var  customerSalary = $('#customer-salary').val();

    let customerObj = customers[recordIndex];
    // let studentObj = {...students[recordIndex]}; // clone object
    customerObj.id = customerId;
    customerObj.name = customerName;
    customerObj.address = customerAddress;
    customerObj.salary = customerSalary;

    // console.log("S1: ", studentObj);
    // console.log("S2: ", students[recordIndex]);

    loadTable();
    $("#customer-reset").click();
});

$("#customer-delete").on('click', () => {
    customers.splice(recordIndex, 1);
    loadTable();
    $("#customer-reset").click();
});

$("#customer-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    console.log("index: ", index);

    let id = $(this).find(".customer-id-value").text();
    let name = $(this).find(".customer-name-value").text();
    let address = $(this).find(".customer-address-value").text();
    let salary = $(this).find(".customer-salary-value").text();

    $("#customer-id").val(id);
    $("#customer-name").val(name);
    $("#customer-address").val(address);
    $("#customer-salary").val(salary);

})


