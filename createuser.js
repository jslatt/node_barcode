$('.CreateUser').click(function(){
    alert("test");
  })

$('#barcode').focus();

$('.searchBar').click(function(){
  var code = $('#barcode').val();
  db.user
      .where("code").equalsIgnoreCase(code)
      .each(function(code) {
          $('.mainView').append('<div class="card"><div class="image"><img src="' + JSON.parse(JSON.stringify(code.img)) + '" alt="Picture" /></div><div class="content"><div class="header">' + JSON.parse(JSON.stringify(code.name)) + '</div><div class="meta"><a>' + JSON.parse(JSON.stringify(code.code)) + '</a></div><div class="description">' + JSON.parse(JSON.stringify(code.title)) + '</div></div><div class="extra content"><span class="right floated verified"></span><span><i class="user icon"></i>' + JSON.parse(JSON.stringify(code.id)) + '</span></div></div>');
          if(code.status == true){
            $('.verified').append('<i class="protect icon"></i>');
          }
      })

  $('#barcode').val(null);
  console.log("search");
  return false;
})
