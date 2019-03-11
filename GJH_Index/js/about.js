

function calcAge(birth) {
  //javascript 에서 지원하는 DATE() 함수
  var date = new Date();

  //javascipt 에서 지원하는 date함수의 getFullYear/getMonth/getDate 를 가져와서 각 변수에 담는다
  var year = date.getFullYear();
  var month = (date.getMonth() + 1);
  var day = date.getDate();


  if (month < 10){
    month = '0' + month;
  }
  if (day < 10){
    day = '0' + day;
  }

  var monthDay = month + day;
  birth = birth.replace('-', '').replace('-', ''); //2019-01-14 이거를 20190114 형태로 바꾸는것
  var birthdayy = birth.substr(0, 4);             //2019
  var birthdaymd = birth.substr(4, 4);            //0114


  //var age = monthDay < birthdaymd ? year - birthdayy - 1 : year - birthdayy;
  var age = 0;
  if(monthDay < birthdaymd){
    age = year - birthdayy - 1;
  }else{
    age = year - birthdayy;
  }


  document.getElementById("myAge").innerHTML = age;

}
