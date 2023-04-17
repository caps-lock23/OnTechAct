function input() {
  let grades = parseInt(document.querySelector('#input').value);
  if (grades >= 85 && grades <= 100) {
    document.write('You are a good student: ' + grades);
  }
  else {
    document.write('You need more practice: ' + grades);
  }
}
