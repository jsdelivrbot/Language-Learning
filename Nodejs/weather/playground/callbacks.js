var getUser = (id, callback) => {
  var user = {
    id,
    name: 'Jeff'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (userObject) => {
  console.log(userObject);
});
