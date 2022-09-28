function block(seconds) {
  var waitTill = new Date(new Date().getTime() + seconds * 1000);
  while (waitTill > new Date()) {}
}

export { block };
