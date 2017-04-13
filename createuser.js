$('.CreateUser').click(function(){
    alert("test");
  })

$('#barcode').focus();

$('.searchBar').click(function(){
  $('#barcode').val(null);
  console.log("search");
  return false;
})
