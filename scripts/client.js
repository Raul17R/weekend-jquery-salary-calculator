$(readyNow);

function readyNow() {
    console.log('Ready now!');
    $('#submit').on('click',pushInfo);
    $('body').on('click', '.delete-button', deleteEmployee);
    // $('body').on('click', '.delete-button',function () {
    //     $(this)
    // });
    // $('#add-car').on('click', function() { $('.search-input').val("") })
    
}
let employees = [];

function pushInfo() {
    console.log('In the button');
    let name = $('#name').val();
    let lastName = $('#lastName').val();
    let idNumber = $('#idNumber').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();
    let totalMonthlyCost =( annualSalary / 12 );

    let addedEmployees = {
        idNumber ,
        totalMonthlyCost,
        };

    employees.push(addedEmployees);
    let totalEmployeeSalary = 0;
    for (let index = 0; index < employees.length; index++) {
        totalEmployeeSalary += employees[index].totalMonthlyCost;
        console.log(totalEmployeeSalary);
        
    }
    $('#tmc').empty();
    $('#tmc').append(`
    Total monthly Cost: ${ '$ '+totalEmployeeSalary.toLocaleString('en-US')}
    `)
    if (totalEmployeeSalary > 20000) {
        $('#tmc').addClass('redbackground')
    }else {
        $('#tmc').removeClass('redbackground')
    }
    
    console.log(name,lastName,idNumber,jobTitle,annualSalary);
    $('#employee-table').append(`
    <tr>
    <td>${name}</td>
    <td>${lastName}</td>
    <td>${idNumber}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td><button class="delete-button">Delete</button></td>
    </tr>
    `)
   
    $('input').val('');
}
function deleteEmployee() {
    console.log('in delete');
    let myParent = $(this).parent().parent();
    console.log($(this).data());  
     myParent.remove();
}