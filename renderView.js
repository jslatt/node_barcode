$('#barcode').focus();
$('.searchBar').click(function(){
  var code = $('#barcode').val();
  db.user
      .where("code").equalsIgnoreCase(code)
      .each(function(code) {
          if(code.status == true){
            $('.mainView').html('<div class="ui card" style="margin-left:auto;margin-right:auto;"><div class="image"><img src="' + JSON.parse(JSON.stringify(code.img)) + '" alt="Picture" /></div><div class="content"><div class="header">' + JSON.parse(JSON.stringify(code.name)) + '</div><div class="meta"><a>' + JSON.parse(JSON.stringify(code.code)) + '</a></div><div class="description">' + JSON.parse(JSON.stringify(code.title)) + '</div></div><div class="extra content"><span class="right floated verified"><i class="protect icon"></i></span><span><i class="user icon"></i>' + JSON.parse(JSON.stringify(code.id)) + '</span></div></div>');
            //latest
            $('.latestScan').append('<div class="card"><div class="image"><img src="' + JSON.parse(JSON.stringify(code.img)) + '" alt="Picture" /></div><div class="content"><div class="header">' + JSON.parse(JSON.stringify(code.name)) + '</div><div class="meta"><a>' + JSON.parse(JSON.stringify(code.code)) + '</a></div><div class="description">' + JSON.parse(JSON.stringify(code.title)) + '</div></div><div class="extra content"><span class="right floated verified"><i class="protect icon"></i></span><span><i class="user icon"></i>' + JSON.parse(JSON.stringify(code.id)) + '</span></div></div>');
          }
          else {
            $('.mainView').html('<div class="ui card" style="margin-left:auto;margin-right:auto;" ><div class="image"><img src="' + JSON.parse(JSON.stringify(code.img)) + '" alt="Picture" /></div><div class="content"><div class="header">' + JSON.parse(JSON.stringify(code.name)) + '</div><div class="meta"><a>' + JSON.parse(JSON.stringify(code.code)) + '</a></div><div class="description">' + JSON.parse(JSON.stringify(code.title)) + '</div></div><div class="extra content"><span class="right floated verified" data-content="Verified" ></span><span><i class="user icon"></i>' + JSON.parse(JSON.stringify(code.id)) + '</span></div></div>');
            //latest
            $('.latestScan').append('<div class="card"><div class="image"><img src="' + JSON.parse(JSON.stringify(code.img)) + '" alt="Picture" /></div><div class="content"><div class="header">' + JSON.parse(JSON.stringify(code.name)) + '</div><div class="meta"><a>' + JSON.parse(JSON.stringify(code.code)) + '</a></div><div class="description">' + JSON.parse(JSON.stringify(code.title)) + '</div></div><div class="extra content"><span class="right floated verified" data-content="Verified" ></span><span><i class="user icon"></i>' + JSON.parse(JSON.stringify(code.id)) + '</span></div></div>');


          }
      })

  $('#barcode').val(null);
  console.log("search");
  return false;
})
