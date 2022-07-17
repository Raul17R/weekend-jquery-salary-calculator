$(readyNow);

function readyNow() {
    console.log('Ready now!');
    $('#submit').on('click',pushInfo);
}

function pushInfo() {
    console.log('In the button');
    let name = $('#name').val();
    let lastName = $('#lastName').val();
    let idNumber = $('#idNumber').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();
    //let songName = $('#song-name').val();//value
    console.log(name,lastName,idNumber,jobTitle,annualSalary);

    $('input').val('');


}