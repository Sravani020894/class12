document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();
  // const Lday=day.toLowerCase();
  //Conditionals go here
  if(day == 'tuesday' || day == 'thrusday')
    document.querySelector('#placeToSee').innerHTML = 'ClassDay';
  else if( day == 'monday' || day == 'wednesday' || day == 'friday')
    document.querySelector('#placeToSee').innerHTML = 'WeekDay';
  else
    document.querySelector('#placeToSee').innerHTML = 'BoringggggDayyyyy';
}
