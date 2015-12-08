function startSearch() {
	var query = $('#search').val().trim();
	console.log(query);
	if(query != '') { //star search
		var list = $('#icons_search_container')
			.show()
			.find('h2').text('Search for "'+query+'"...').end()
			.find('.icon-list').empty();
		$('#icons_container').hide();
		icons.forEach(function (icon_group) {
			icon_group.icons.forEach(function (icon_name) {
				if(icon_name.indexOf(query) > -1) {
					console.log(icon_name);
					list.append('<li><i class="fa fa-fw fa-'+icon_name+'"></i></li>');
				}
			});
		});
	} else { //stop searching
		$('#icons_search_container').hide();
		$('#icons_container').show();
	}
}


var icons_container = $('#icons_container');
icons.forEach(function (icon_group) {
	var group_container = $('<div class="icon-group"><h2>'+icon_group.title+'</h2><ul class="icon-list"></ul></div>');
	var group_container_icons = group_container.find('.icon-list');
	icon_group.icons.forEach(function (icon_name) {
		group_container_icons.append('<li><i class="fa fa-fw fa-'+icon_name+'"></i></li>');
	});
	icons_container.append(group_container);
});

$('.icon-list li').click(function () {
	var el = $(this);
	if(el.hasClass('active')) {
		el.removeClass('active');	
	} else {
		$('.icon-list li').removeClass('active');
		el.addClass('active');
	}
});

var search_timer;
$('#search').keyup(function (e) {
	console.log('keyup');
	clearTimeout(search_timer);
	search_timer = setTimeout(startSearch, 300);
});