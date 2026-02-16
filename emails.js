var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com"
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com"
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru"
  }
];

// регулярное выражение
// до @ → одно или два слова через точку
// домен → только gmail.com или yahoo.com
var pattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

var trustedEmails = [];

for (var i = 0; i < arr.length; i++) {

  var currentEmail = arr[i].email;

  if (pattern.test(currentEmail)) {
    trustedEmails.push(currentEmail);
  }

}

console.log(trustedEmails);
