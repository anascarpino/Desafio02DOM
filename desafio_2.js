function addListener(node, type, handler) {
	if (node.addEventListener) {
		node.addEventListener(type, handler, false);
	} else if (node.attachEvent) {
		node.attachEvent("on"+type, handler);
	} else {
		node["on"+type] = handler;
	}
}

function cancelDefault(e) {
	e = e || event;
	
	e.returnValue = false;
	if (e.preventDefault) {
		e.preventDefault();
	}
	
	return e;
}

addListener(window, "load", function() {
    $('#informacao a').click(function(){
		$('#informacao').addClass('selected');
		$('#correcao').removeClass('selected');
		$('#atualizacao').removeClass('selected');
		$('#informacao a').attr('href', '#info');
		$('#info').addClass('intop');
		$('#bugfix').removeClass('intop');
		$('#update').removeClass('intop');
	});
	$('#correcao a').click(function(){
		$('#correcao').addClass('selected');
		$('#informacao').removeClass('selected');
		$('#atualizacao').removeClass('selected');
		$('#correcao a').attr('href', '#bugfix');
		$('#bugfix').addClass('intop');
		$('#info').removeClass('intop');
		$('#info').addClass('sheet');
		$('#update').removeClass('intop');
	});
	$('#atualizacao a').click(function(){
		$('#atualizacao').addClass('selected');
		$('#informacao').removeClass('selected');
		$('#correcao').removeClass('selected');
		$('#atualizacao a').attr('href', '#update');
		$('#update').addClass('intop');
		$('#bugfix').removeClass('intop');
		$('#info').removeClass('intop');
	});
});

function blink(selector) {
	$(selector).fadeOut('slow', function() {
		$(this).fadeIn('slow', function() {
			blink(this);
		});
    });
}

$(document.body.childNodes[6].childNodes[1].childNodes[6].childNodes[1]).click(function(){
	$('#colortest').css("backgroundColor", "red");
	blink('#colortest');
});

$(document.body.childNodes[6].childNodes[1].childNodes[6].childNodes[2]).click(function(){
	$('#colortest').css("backgroundColor", "blue");
	blink('#colortest');
});

$(document.body.childNodes[6].childNodes[1].childNodes[6].childNodes[3]).click(function(){
	$('#colortest').css("backgroundColor", "black");
	blink('#colortest');
});