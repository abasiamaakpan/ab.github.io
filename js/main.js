
function validate()
{
  var name = document.forms["Register"]["Name"];
  var address = document.forms["Register"]["Address"];
  var email = document.forms["Register"]["Email"];
  var phone = document.forms["Register"]["Telephone"];

  if (name.value == "")
  {
    window.alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (address.value == "")
  {
    window.alert("Please enter your address.");
    name.focus();
    return false;
  }

  if (email.value == "")
  {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (email.value.indexOf("@", 0) < 0)
  {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (email.value.indexOf(".", 0) < 0)
  {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (phone.value == "")
  {
    window.alert("Please enter your telephone number.");
    phone.focus();
    return false;
  }

  window.alert("Thanks for submitting your form. ");
  return true;
}

$('.myImg').click(function (e) {
  var src = $(this).attr('src');
  var alt=$(this).attr('alt');
  console.log(alt);
$('#Modalimage').attr('src', src);
$('#Modal-title').text(alt);
$('.modal').modal('show');

});
