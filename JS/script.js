		var doCoolStuff = function () {
			var currentClassName = document.getElementById('cool').className;

			if (currentClassName == 'cool') {
			document.getElementById('cool').className = 'thats cool';
			} else {
				document.getElementById('cool').className = 'cool';
			}
		}

		var sagMeinenNamen = function (name) {
			alert('Ich heiße: '+name);
		}



		var car = {
			make: 'Audi',
			type: 'A5',
			color: 'Titanium White',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: ['seat 1',
			 		'seat 2',
			 		'seat 3',
			 		'seat 4'
			 		],
			 turnOn: function () {
			 	this.isTurnedOn = true;
			 },
			 fly: function () {
			 	alert('fly');
			 },
			 switchCar: function (isOn) {
			 	console.log('turn car ' +isOn);
			 	if (isOn == true) {
			 		this.isTurnedOn = true; 
			 	} else {
			 		this.isTurnedOn = false;
			 	}
			 }
 		};

		console.log('Hello mein fellow companions');