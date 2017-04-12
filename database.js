// By: James Slattery
// Begin DB
var db = new Dexie("UserDatabase");
db.version(1).stores({
    user: "++id,name,code,status"
});

$('.CreateUser').click(function(){
  console.log(".CreateUser was clicked?")
});
/*
db.user.add({
    name: "James",
    code: 001828,
    status: true
})
*/
//Add User function
function AddUser(UserName,UserCode,UserStatus){
  db.user.add({
    name: UserName,
    code: UserCode,
    status: UserStatus
  })
  return;
};


db.user
    .where("name").equalsIgnoreCase("James")
    .each(function(name) {
        console.log(JSON.stringify(name));
    })
    //.then();
// End DB
