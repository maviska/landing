window.username = "";

function nameForm(){
	window.username = document.name.user_name_text.value.toString(); 
	if (username != "" && username != null){
	alert("Здравствуйте, " + window.username +"!");
	}
	else {
		document.getElementById("popupNameUser").innerHTML = "Не введено имя пользователя";
		alert("Проверьте правильность введённого имени")
	}
}

function takeArea(){
	var side = document.area.area_side.value;
	var high = document.area.area_high.value;
	if(side != ""){
		if(high != ""){
			var area = 0.5*side*high;
			if(!isNaN(area)){
			var Txt = "Сторона: " + side + "\n"
			+ "Высота: " + high + "\n" +
			"Площадь: " + area;
			alert(Txt);
			}
			else alert("Ошибка при вычислении")
		}
		else alert("Вы не ввели высоту")
	}
	else alert("Вы не ввели сторону")
	
}

function compareStrings(){
	var lengthstr1 = document.strings.first_string.value.length;
	var lengthstr2 = document.strings.second_string.value.length;
	if (lengthstr1 == lengthstr2) {
		alert("Строки равны");
	}
	else {
		alert("Строки не равны");
	}
}

function takeMaxMin(){
	let max=-1;
	let min=9;
	let array = document.maxmin.array.value.split('');
	if (array.length > 5) {
		alert("Введено более чем 5 элементов");
	} 
	else if (array.length < 5) {
		alert("Введено менее чем 5 элементов");
	}
	else {
		for (let i = 0; i < 5; i++){
			if (array[i] > max) {
				max=array[i];
			}
			if (array[i] < min){
				min=array[i];
			}
		}
		alert("Максимальный элемент: " + max + "\nМинимальный элемент: " + min);
	}

}


let hours = "00";
let minutes = "00";
let seconds = "00";
let timer;


let maintimer = {

  counter() {
    document.getElementById("hours").innerHTML = hours.toString();
    document.getElementById("minutes").innerHTML = minutes.toString();
    document.getElementById("seconds").innerHTML = seconds.toString();

    seconds++;

    if (seconds < 10){
    	seconds = '0' + seconds % 10;
    }

    if (minutes < 10){
    	minutes = '0' + minutes % 10;
    }

    if (hours < 10){
    	hours = '0' + hours % 10;
    }

    if (seconds == 60){
        seconds = "00";
        if (minutes < 9){
        minutes = '0' + ((minutes % 10) + 1);
    	}
    	else minutes++;
    }
    if (hours == 60){
        hours = "00";
        if (hours < 9){
        hours = '0' + ((hours % 10) + 1);
    	}
    	else hours++;
    }
  
    timer = window.setTimeout("maintimer.counter()",1000);
  },
  start() {
    if (!timer)
      this.counter();
  },
  stop() {
    if (timer) {
      clearTimeout(timer);
      timer=null;
    }
  },
  over(){
    hours = "00";
    minutes = "00";
    seconds = "00";
    if(timer || !timer) {
      window.clearInterval(timer);
      timer = null;
      document.getElementById("hours").innerHTML="00";
      document.getElementById("minutes").innerHTML="00";
      document.getElementById("seconds").innerHTML="00";
    }
  },
};

function openPopup(){
	let popup = document.getElementById('mypopup');
	let popupBtn = document.getElementById('popupButton');
	let popupClose = document.querySelector('.close');

	if (window.username != "" && window.username != null) {
	document.getElementById("popupNameUser").innerHTML = "Пользователь: " + window.username;
	}
	else {
	document.getElementById("popupNameUser").innerHTML = "Пользователь неизвестен";	
	}
	popup.style.display = "block";

	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	if (day < 10){day = "0" + day;}
	if (month < 10){month = "0" + month;}

	document.getElementById("popup-body").innerHTML = "Текущая дата: <br>" + day + "." + month + "." + year;

	popupClose.onclick = function(){
		popup.style.display="none";
	}

	window.onclick = function(e){
		if(e.target == popup){
			popup.style.display = "none";
		}
	}
}

