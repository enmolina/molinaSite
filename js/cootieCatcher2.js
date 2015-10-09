$( document ).ready(function() {

	var name = "";
	var number = 0;
	var fortunes = [

    "You will find a thing. It may be important.",
    "Stop eating now. Food poisoning is no fun.",
    "Sleep with one eye open tonight.",
    "Your reality check about to bounce.",
    "The end is near, might as well have dessert.",
    "Run.",
    "You will die alone and poorly dressed.",
    "Tomorrow is Saturday. And Sunday comes afterwards."

                 ];

	$('#turquoise').on('click', function() {
		name = $('#turquoise').attr('id');

		console.log(name);
		shuffleCatcher();

	});
	$('#yellow').on('click', function() {
		name = $('#yellow').attr('id');

		console.log(name);
		shuffleCatcher();

	});
	$('#fuchsia').on('click', function() {
		name = $('#fuchsia').attr('id');

		console.log(name);
		shuffleCatcher();

	});
	$('#green').on('click', function() {
		name = $('#green').attr('id');

		console.log(name);
		shuffleCatcher();

	});

	var shuffleCatcher = function(){
		if(name === "turquoise" || name === "green")
		{
			console.log("You chose turquoise or green.");
			$('#turquoise').text('1');
			$('#fuchsia').text('8');
			$('#green').text('13');
			$('#yellow').text('14');

			$('#yellow').off('click');
			$('#fuchsia').off('click');
			$('#turquoise').off('click');
			$('#green').off('click');
			startClick();

		} else {
			console.log("You chose fuchsia or yellow.");
			$('#turquoise').text('17');
			$('#fuchsia').text('4');
			$('#green').text('7');
			$('#yellow').text('2');

			$('#yellow').off('click');
			$('#fuchsia').off('click');
			$('#turquoise').off('click');
			$('#green').off('click');
			startClick();
		}
	}

	var startClick = function()
	{
		$('#yellow').on('click', function(){
			number = $('#yellow').text();
			console.log(number);
			checkEven();
		});
		$('#fuchsia').on('click', function(){
			number = $('#fuchsia').text();
			console.log(number);
			checkEven();
		});
		$('#turquoise').on('click', function(){
			number = $('#turquoise').text();
			console.log(number);
			checkEven();
		});
		$('#green').on('click', function(){
			number = $('#green').text();
			console.log(number);
			checkEven();
		});

	}

	var checkEven = function()
	{
		if(!(number%2 === 0)){
			if(name === "turquoise" || name === "green")
			{
				$('#turquoise').text('17');
				$('#fuchsia').text('4');
				$('#green').text('7');
				$('#yellow').text('2');

				$('#yellow').off('click');
				$('#fuchsia').off('click');
				$('#turquoise').off('click');
				$('#green').off('click');
				tellFortune();

			} else {

				$('#turquoise').text('1');
				$('#fuchsia').text('8');
				$('#green').text('13');
				$('#yellow').text('14');

				$('#yellow').off('click');
				$('#fuchsia').off('click');
				$('#turquoise').off('click');
				$('#green').off('click');
				tellFortune();
		 }
		} else {
			tellFortune();
		}
	}

	var tellFortune = function(){
		var temp = 0;
		$('#yellow').on('click', function(){
			temp = $('#yellow').text();
      //console.log("I am clicked: "+fortunes[temp-1]);
			alert("Here is your fortune: " + fortunes[temp-1]);
		});
		$('#fuchsia').on('click', function(){
			temp = $('#yellow').text();
      //console.log("I am clicked: "+fortunes[temp-1]);
			alert("Here is your fortune: " + fortunes[temp-1]);
		});
		$('#turquoise').on('click', function(){
			temp = $('#yellow').text();
      //console.log("I am clicked: "+fortunes[temp-1]);
			alert("Here is your fortune: " + fortunes[temp-1]);
		});
		$('#green').on('click', function(){
			temp = $('#yellow').text();
      //console.log("I am clicked: "+fortunes[temp-1]);
			alert("Here is your fortune: " + fortunes[temp-1]);
		});
	}
});
