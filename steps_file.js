// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    haveCredentials(username, password) {
      this.username = username;
      this.password = password;
    },
    getCredentials() {
      return { username: this.username, password: this.password };
    }
  });
}

