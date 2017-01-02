"use strict";
var $ = jQuery;
var $row = $('tbody').find('tr'),
		$total = $('.total').find('span');

$row.on('keyup change', function() {
	var $price = parseFloat($(this).find('input[name=price]').val()) || 0,
			$tax   = parseFloat($(this).find('input[name=tax]').val()) || 0,
			$subtotal = $(this).find('.row-total'),
			$subtotalVal = $price * (1 + $tax/100),
			$checkbox = $(this).find('input[type=checkbox]'),
			total = 0;	

	if ($checkbox.is(':checked')) {
		$subtotal.html($subtotalVal.toFixed(2));
	} else {
		$subtotal.html("0.00");
	}

	$row.each(function() {
		total += parseFloat($(this).find('.row-total').html()) || 0;
		$total.html(total.toFixed(2));
		
	});

});