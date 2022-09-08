function errorremove() {
    element = document.getElementById('nameerorr');
    element.innerHTML = '';
    email = document.getElementById('emailerorr');
    email.innerHTML = '';

}
function seterror(id, error) {

    element = document.getElementById(id);
    element.innerHTML = error;


}
function validate() {


    var result = true;
    var name = document.forms['myform']["name"].value;
    if (name == 0) {
        seterror("nameerror", "*Name is required");
        console.log('error');
        result = false;



    }
    var email = document.forms['myform']["email"].value;
    if (email == 0) {
        seterror("emailerror", "*Email is required");
        console.log('error');
        result = false;



    }


    return result;
}