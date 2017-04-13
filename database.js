// By: James Slattery
// Begin DB
var db = new Dexie("UserDatabase");
db.version(1).stores({
    user: "++id,name,code,img,title,status"
});

/*
db.user.add({
    name: "James",
    code: "shalom",
    img: "https://semantic-ui.com/images/avatar2/large/matthew.png",
    title: "CEO",
    status: true
})
*/
//Add User function
function AddUser(UserName,UserCode,Uimg,Utitle,UserStatus){
  db.user.add({
    name: UserName,
    code: UserCode,
    img: Uimg,
    title: Utitle,
    status: UserStatus
  })
  return;
};

    //.then();
// End DB
