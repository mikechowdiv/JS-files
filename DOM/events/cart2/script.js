function compute() {

	//Apples
	var appQ = form1.txtAppleQ.value;
	appQ = parseInt(appQ);

	if( (isNaN(appQ)) || (appQ == "") || (appQ < 0) ) {
		appQ = 0;
		form1.txtAppleQ.value = 0;
	}

	var appT = appQ * 5.49;
	form1.txtAppleT.value = appT.toFixed(2);

	//Pears
	var peaQ = form1.txtPearsQ.value;
	peaQ = parseInt(peaQ);
	if( (isNaN(peaQ)) || (peaQ == "") || (peaQ < 0) ) {
		peaQ = 0;
		form1.txtPearsQ.value = 0;
	}
	var peaT = peaQ * 7.49;
	form1.txtPearsT.value = peaT.toFixed(2);

	//Grapes
	var graQ = form1.txtGrapesQ.value;
	graQ = parseInt(graQ);
	if( (isNaN(graQ)) || (graQ == "") || (graQ < 0) ) {
		graQ = 0;
		form1.txtGrapesQ.value = 0;
	}
	var graT = graQ * 6.49;
	form1.txtGrapesT.value = graT.toFixed(2);

	//Subtotal
	var totalQ = appQ + peaQ + graQ;
	form1.txtQuantity.value = totalQ;
	var subT = appT + peaT + graT;
	form1.txtSubT.value = subT.toFixed(2);

	//Tax
	var tax = subT * 0.06;
	form1.txtTax.value = tax.toFixed(2);
	
	//Total
	var total = subT + tax;
	form1.txtTotal.value = total.toFixed(2);
}