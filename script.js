$(function() {
	$('.tab-panels .tabs li').on('click', function() {
		var panelToShow = $(this).attr('rel');
		$('.tab-panels .panel.active').slideUp(300);
	});
});