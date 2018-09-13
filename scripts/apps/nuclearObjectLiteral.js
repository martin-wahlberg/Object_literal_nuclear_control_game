const NUCLEARAPP = {
	init() {
		const NA = NUCLEARAPP;
		let setHTMLObjects = function() {
			NA.container = $("<div>");
			NA.bessel = $("<div>");
			NA.panel = $("<div>");
			NA.screenArea = $("<div>");
			NA.screenMount = $("<div>");
			NA.screen = $("<div>");
			NA.logoPlate = $("<div>");
			NA.logoNuc = $("<div>");
			NA.buttonRow = $("<div>");
			NA.checkContainer = $("<label>");
			NA.checkbox = $("<input>");
			NA.checkmark = $("<span>");
			NA.buttonTxtRow = $("<div>");
			NA.buttonTxt = $("<div>");
			NA.sliderArea = $("<div>");
			NA.slidecontainer = $("<table>");
			NA.slider = $("<input>");
			NA.abortButtonContainer = $("<div>");
			NA.buttonBesselBessel = $("<div>");
			NA.buttonBessel = $("<div>");
			NA.redButton = $("<button>");
			NA.atomTxt = $("<div>");
			NA.lockedPanel = $("<div>");
			NA.passwordWindow = $("<div>");
			NA.yellow = $("<div>");
			NA.passwordField = $("<input>");
			NA.loginBtn = $("<button>");
			NA.screenAtom1 = $("<div>");
		}();
		let setEvents = function() {
			$.when($.ready).then(function() {
				$("#sca1").css({
					"top": "0%",
					"left": "5%"
				});
				$("#sca1").css({
					"top": "0%",
					"left": "35%"
				});
			});
			NA.loginBtn.click(function() {
				var pw = NA.passwordField.val();
				var loginCheck = NUCLEARMODULE.checkPw(pw);
				if (loginCheck) {
					NA.lockedPanel.hide();
				}
			});
			NA.checkbox.change(function() {
				var id = $(this).attr("id");
				var checked = false;
				if (this.checked) {
					checked = true;
				}
				var buttonPushed = NUCLEARMODULE.btnPush(id, checked);
				//window.alert(screenInfo)
				var reactorDisplay = NUCLEARMODULE.reactorDisplay();
				NA.screenAtom1.html(reactorDisplay.skjerm1);
				NA.screenAtom2.html(reactorDisplay.skjerm2);
			});
			NA.slider.mousemove(function() {
				var sliderValue = $(this).val();
				var sliderPos = NUCLEARMODULE.appInteraction(sliderValue);
				NA.slider.val(sliderPos);
				var reactorDisplay = NUCLEARMODULE.reactorDisplay();
				NA.screenAtom1.html(reactorDisplay.skjerm1);
				NA.screenAtom2.html(reactorDisplay.skjerm2);
				meltdown(reactorDisplay.meltdownMSG);
			});
			NA.slider.mouseleave(function() {
				var reactorDisplay = NUCLEARMODULE.reactorDisplay("updateDanger");
			});
			NA.redButton.click(function() {
				var reactorDisplay = NUCLEARMODULE.btnPush("coolDown");
				reactorDisplay = NUCLEARMODULE.reactorDisplay();
				NA.screenAtom1.html(reactorDisplay.skjerm1);
				NA.screenAtom2.html(reactorDisplay.skjerm2);
			});

			function meltdown(args) {
				if (args == "en") {
					NA.screenAtom1.html("Mulig meltdown detektert");
					NA.screenAtom2.html("Mulig meltdown detektert");
				}
				if (args == "to") {
					NA.screenAtom1.html("Juster nivåer for å unngå meltdown");
					NA.screenAtom2.html("Juster nivåer for å unngå meltdown");
				}
				if (args == "tre") {
					NA.screenAtom1.html("Aktiver cool down");
					NA.screenAtom2.html("Aktiver cool down");
				}
				if (args == "fire") {
					NA.screenAtom1.html("Meltdown");
					NA.screenAtom2.html("Meltdown");
				}
			}
		}();
		let setAppGui = function() {
			NA.container.attr("id", "container").css({
				"position": "absolute",
				"top": "15%",
				"left": "10%",
				"height": "70%",
				"width": "80%",
				"overflow": "hidden"
			});
			NA.bessel.attr("id", "bessel").css({
				"position": "absolute",
				"top": "0%",
				"left": "0%",
				"width": "95%",
				"height": "88.7%",
				"border": "2vw solid #7f7f7f",
				"borderRadius": "2vw",
				"backgroundColor": "#7f7f7f"
			});
			NA.panel.attr("id", "panel").css({
				"position": "absolute",
				"top": "0%",
				"left": "0%",
				"width": "95%",
				"height": "88.7%",
				"border": "2vw solid #202020",
				"borderRadius": "2vw",
				"backgroundColor": "#202020"
			});
			NA.screenArea.attr("class", "screenArea").css({
				"position": "absolute",
				"width": "30%",
				"height": "50%"
			});
			NA.screenMount.attr("class", "screenMount").css({
				"position": "absolute",
				"width": "91%",
				"height": "85%",
				"border": "1vw solid #7f7f7f",
				"borderRadius": "2vw",
				"backgroundColor": "#7f7f7f"
			});
			NA.screen.attr("class", "screen").css({
				"position": "absolute",
				"bottom": "0%",
				"width": "90%",
				"height": "82%",
				"border": "1vw solid #ededcf",
				"borderRadius": "2vw",
				"backgroundColor": "#ededcf"
			});
			NA.logoPlate.attr("class", "logoPlate").css({
				"position": "absolute",
				"bottom": "0%",
				"width": "100%",
				"height": "30%",
				"border-Bottom": "1vw solid #202020",
				"borderBottomLeftRadius": "2vw",
				"borderBottomRightRadius": "2vw",
				"backgroundColor": "#202020"
			});
			NA.logoNuc.attr("class", "logoNuc").css({
				"position": "absolute",
				"top": "20%",
				"left": "42.5%",
				"width": "15%",
				"height": "80%",
				"backgroundImage": "url(./images/icons/nuculear.png)",
				"backgroundSize": "contain",
				"backgroundRepeat": "no-repeat",
				"backgroundPosition": "center"
			});
			NA.buttonRow.attr("class", "buttonRow").css({
				"position": "absolute",
				"top": "55%",
				"left": "5%",
				"width": "60%",
				"height": "15%",
			});
			NA.buttonTxtRow.attr("class", "buttonTxtRow").css({
				"position": "absolute",
				"top": "70%",
				"left": "5%",
				"width": "60%",
				"height": "5%",
				"fontFamily": "'Teko', sans-serif"
			});
			NA.buttonTxt.attr("class", "buttonTxt").css({
				"position": "relative",
				"height": "100%",
				"width": "10%",
				"float": "left",
				"marginLeft": "1%",
				"fontSize": "1.2em",
				"color": "white",
				"textAlign": "center"
			});
			NA.sliderArea.attr("class", "sliderArea").css({
				"position": "absolute",
				"top": "80%",
				"left": "6%",
				"height": "15%",
				"width": "50%",
				"border": "0.5em solid #2f4044",
				"borderRadius": "1.5em",
				"backgroundColor": "#2f4044"
			});
			NA.slidecontainer.attr("class", "slidecontainer").css({
				"position": "absolute",
				"top": "60%",
				"width": "100%"
			});
			NA.slider.attr("class", "slider").attr("type", "range").attr("min", "1").attr("max", "100").attr(
				"value", "50").attr("id", "myRange").css({
				"WebkitAppearance": "none",
				"width": "100%",
				"height": "1em",
				"borderRadius": "5px",
				"background": "black",
				"outline": "none",
				"opacity": "0.7",
				"WebkitTransition": ".2s",
				"transition": "opacity .2s"
			});
			NA.abortButtonContainer.attr("class", "abortButtonContainer").css({
				"position": "absolute",
				"bottom": "0",
				"right": "5%",
				"height": "45%",
				"width": "20%"
			});
			NA.buttonBesselBessel.attr("class", "buttonBesselBessel").css({
				"borderRadius": "50%",
				"width": "100%",
				"height": "100%",
				"backgroundColor": "#7f7f7f"
			});
			NA.buttonBessel.attr("class", "buttonBessel").css({
				"position": "absolute",
				"borderRadius": "50%",
				"left": "10%",
				"top": "10%",
				"width": "80%",
				"height": "80%",
				"backgroundColor": "#202020"
			});
			NA.redButton.attr("class", "redButton").css({
				"position": "absolute",
				"borderRadius": "50%",
				"left": "5%",
				"top": "5%",
				"width": "90%",
				"height": "90%",
				"backgroundColor": "#e26661",
				"border": "0.3vw solid #eb3529",
				"fontFamily": "'Exo 2', sans-serif",
				"fontSize": "2em",
				"color": "white"
			});
			NA.atomTxt.attr("class", "atomTxt").css({
				"position": "absolute",
				"height": "20%",
				"width": "28%",
				"top": "5%",
				"right": "1%",
				"fontFamily": "'Exo 2', sans-serif",
				"fontSize": "2.5em",
				"color": "#a1fa9d",
				"textAlign": "center"
			});
			NA.lockedPanel.attr("class", "lockedPanel").css({
				"position": "absolute",
				"top": "0%",
				"left": "0%",
				"width": "95%",
				"height": "88.7%",
				"border": "2vw solid #202020",
				"borderRadius": "2vw",
				"backgroundColor": "#202020"
			});
			NA.passwordWindow.attr("class", "passwordWindow").css({
				"position": "absolute",
				"left": "30%",
				"top": "30%",
				"width": "40%",
				"height": "40%",
				"backgroundColor": "rgba(0, 0, 0, 0.5)",
				"borderRadius": "5%"
			});
			NA.yellow.attr("class", "passwordWindow").css({
				"position": "absolute",
				"width": "100%",
				"height": "15%",
				"backgroundImage": "url(./images/stripes.jpg)"
			});
			NA.passwordField.attr("id", "passwordField").css({
				"position": "absolute",
				"top": "30%",
				"left": "20%",
				"width": "60%",
				"height": "20%",
				"textAlign": "center",
				"fontSize": "2.3em",
				"border": "0",
				"backgroundColor": "rgba(255, 255, 255, 0.3)",
				"color": "white"
			});
			NA.loginBtn.attr("id", "loginBtn").css({
				"position": "absolute",
				"top": "60%",
				"left": "30%",
				"width": "40%",
				"height": "20%",
				"textAlign": "center",
				"fontSize": "1.5em",
				"border": "0",
				"backgroundColor": "rgba(255, 255, 255, 0.3)",
				"color": "white",
				"fontFamily": "sans-serif"
			});
			NA.screenAtom1.attr("id", "screenAtom1").css({
				"position": "absolute",
				"top": "12%",
				"left": "7.5%",
				"width": "85%",
				"height": "54%",
				"textAlign": "center",
				"fontSize": "2em",
				"border": "0",
				"color": "#999999",
				"font-family": "'VT323', monospace"
			});
			NA.screenAtom2 = NA.screenAtom1.clone();
			NA.passwordWindow.append(NA.loginBtn.html("Logg Inn"));
			NA.passwordWindow.append(NA.passwordField.attr("type", "password").attr("value",
				"putinsuperstar"));
			NA.passwordWindow.append(NA.yellow);
			NA.lockedPanel.append(NA.passwordWindow);
			NA.buttonBessel.append(NA.redButton.html("COOL DOWN"));
			NA.buttonBesselBessel.append(NA.buttonBessel);
			NA.abortButtonContainer.append(NA.buttonBesselBessel);
			NA.slidecontainer.append(NA.slider);
			NA.sliderArea.append(NA.slidecontainer);
			NA.checkContainer.attr("class", "checkContainer")
			NA.checkCheck = NA.checkContainer.clone(true);
			for (var i = 0; i < 2; i++) {
				var radioID = "btnId_" + i;
				NA.checkCheck = NA.checkContainer.clone(true);
				NA.checkCheck.append(NA.checkbox.attr("type", "checkbox").attr("id", radioID).clone(true));
				NA.checkCheck.append(NA.checkmark.attr("class", "checkmark").clone(true));
				NA.buttonRow.append(NA.checkCheck.clone(true));
			}
			for (var i = 0; i < 6; i++) {
				var radioID = "radioId_" + i;
				NA.checkedChecked = NA.checkContainer.clone(true);
				NA.checkedChecked.append(NA.checkbox.attr("type", "radio").attr("name", "radio").attr("id",
					radioID).clone(true));
				NA.checkedChecked.append(NA.checkmark.attr("class", "checkmark").clone(true));
				NA.buttonRow.append(NA.checkedChecked.clone(true));
			}
			NA.buttonTxtRow.append(NA.buttonTxt.clone(true).html("Reac 1"));
			NA.buttonTxtRow.append(NA.buttonTxt.clone(true).html("Reac 2"));
			NA.buttonTxtRow.append(NA.buttonTxt.clone(true).html("On/Off"));
			NA.buttonTxtRow.append(NA.buttonTxt.clone(true).html("Cooling"));
			NA.buttonTxtRow.append(NA.buttonTxt.clone(true).html("Speed"));
			NA.buttonTxtRow.append(NA.buttonTxt.clone(true).html("Power"));
			NA.buttonTxtRow.append(NA.buttonTxt.clone(true).html("Water"));
			NA.buttonTxtRow.append(NA.buttonTxt.clone(true).html("Info"));
			NA.screenMount.append(NA.screen);
			NA.screenMount.append(NA.logoPlate);
			NA.logoPlate.append(NA.logoNuc);
			NA.screenArea.append(NA.screenMount);
			NA.panel.append(NA.atomTxt.html("ATOMREAKTOR<br>500/600"));
			NA.panel.append(NA.abortButtonContainer);
			NA.panel.append(NA.sliderArea);
			NA.panel.append(NA.buttonRow);
			NA.panel.append(NA.buttonTxtRow);
			NA.panel.append(NA.screenArea.attr("id", "sca1").clone(true).append(NA.screenAtom2.html(
				"Velkommen")));
			NA.panel.append(NA.screenArea.attr("id", "sca2").clone(true).append(NA.screenAtom1.html(
				"Velkommen")));
			NA.bessel.append(NA.panel);
			NA.bessel.append(NA.lockedPanel);
			NA.container.append(NA.bessel);
		}();
		return NA.container;
	}
}
