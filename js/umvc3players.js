function umvc3players(tag) {
	console.log(tag);
	if (tag === null) {
		$('#player_search_results').html("");
		return;
	}
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			$('#player_search_results').html(xmlhttp.responseText);
	    }
	}
	xmlhttp.open("GET", "file://localhost/Users/phil.deisinger/Documents/TextMate/pdice/classes/umvc3players.php?tag=" + tag, true);
	xmlhttp.send();
};