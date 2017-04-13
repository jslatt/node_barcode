$('.CreateUser').click(function(){
  console.log("Create event triggered.");
  var Uname = $('#CreateName').val();
  var barcode = $('#CreateBarcode').val();
  var imgURL = $('#CreateImg').val();
  var Utitle = $('#CreateTitle').val();
  console.log("Values Logged...");
  var verified = false;

  if($('#CreateVerified').is(':checked')) {
    verified = true;
  }
  if(imgURL == ""){
    imgURL = "http://www.answersfrommen.com/wp-content/uploads/2012/07/nerdy-white-guy.jpg";
    console.log("Default Image applied.");
  }

  console.log("Verified is " + verified);
  console.log("Create: " + Uname + " " + barcode + " " + imgURL + " " + Utitle + " " + verified);

  db.user.add({
      name: Uname,
      code: barcode,
      img: imgURL,
      title: Utitle,
      status: verified
    });

    $('.createID').modal('hide');
  return;
})
