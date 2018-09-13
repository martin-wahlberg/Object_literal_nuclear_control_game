const NUCLEARMODULE = (function() {
	var reac1 = false;
	var reac2 = false;
	var onOff = false;
	var cooling = false;
	var speed = false;
	var power = false;
	var water = false;
	var informasjon = false;
	var auto = false;
	var reactOne = false;
	var reactTwo = false;
	var cooling1 = "50";
	var cooling2 = "50";
	var speed1 = "50";
	var speed2 = "50";
	var power1 = "50";
	var power2 = "50";
	var water1 = "50";
	var water2 = "50";
	var skjerm1 = "Velkommen"
	var skjerm2 = "Velkommen"
	var c1 = "0";
	var s1 = "0";
	var p1 = "0";
	var w1 = "0";
	var c2 = "0";
	var s2 = "0";
	var p2 = "0";
	var w2 = "0";
	var meltCount = 0;
	var melting = "";
	var btnDown = "";
	const checkPw = function(pw) {
		if (pw === "putinsuperstar") {
			return true;
		} else {
			return false;
		}
	};
	const btnPush = function(id, chck) {
		if (id == "coolDown") {
			if (meltCount < 5) {
				reactOne = false;
				reactTwo = false;
				cooling1 = "50";
				cooling2 = "50";
				speed1 = "50";
				speed2 = "50";
				power1 = "50";
				power2 = "50";
				water1 = "50";
				water2 = "50";
				skjerm1 = "Cooldown gjennomført";
				skjerm2 = "Cooldown gjennomført";
				meltCount = 0;
				reactorDisplay("utregning")
				btnDown = "Cool Down";
			}

		}
		var checkedNM = chck;
		switch (id) {
			case "btnId_0":
				btnDown = "Reac1";
				if (checkedNM) {
					reac1 = true;
					if (onOff) {
						if (reactOne) {
							skjerm1 = "Dra til venstre for å slå av";
						} else {
							skjerm1 = "Dra til høyre for å slå på";
							meltCount = 0;
						}
					} else {
						skjerm1 = "Skru på reaktor";
					}
					if (cooling) {
						skjerm1 = "Still inn kjølingsgrad";
					}
					if (speed) {
						skjerm1 = "Still inn hastighet";
					}
					if (power) {
						skjerm1 = "Still inn kraftuttak";
					}
					if (water) {
						skjerm1 = "Still inn kraftuttak";
					}
				} else {
					reac1 = false;
					skjerm1 = "Velg Reaktor";
				}
				break;
			case "btnId_1":
				btnDown = "Reac2";
				if (checkedNM) {
					reac2 = true;
					if (onOff) {
						if (reactTwo) {
							skjerm2 = "Dra til venstre for å slå av";
						} else {
							skjerm2 = "Dra til høyre for å slå på";
							meltCount = 0;
						}
					} else {
						skjerm2 = "Skru på reaktor";
					}
					if (cooling) {
						skjerm2 = "Still inn kjølingsgrad";
					}
					if (speed) {
						skjerm2 = "Still inn hastighet";
					}
					if (power) {
						skjerm2 = "Still inn kraftuttak";
					}
					if (water) {
						skjerm2 = "Still inn kraftuttak";
					}
					if (informasjon) {
						reactorDisplay("info");
					}
				} else {
					reac2 = false;
					skjerm2 = "Velg Reaktor";
				}
				break;
			case "radioId_0":
				btnDown = "on/off";
				if (checkedNM) {
					onOff = true;
					cooling = false;
					speed = false;
					power = false;
					water = false;
					informasjon = false;
					auto = false;
					if (reac1) {
						if (reactOne) {
							skjerm1 = "Dra til venstre for å slå av";
						} else {
							skjerm1 = "Dra til høyre for å slå på";
							meltCount = 0;
						}
					} else {
						skjerm1 = "Velg Reaktor";
					}
					if (reac2) {
						if (reactTwo) {
							skjerm2 = "Dra til venstre for å slå av";
						} else {
							skjerm2 = "Dra til høyre for å slå på";
							meltCount = 0;
						}
					} else {
						skjerm2 = "Velg Reaktor";
					}
				}
				break;
			case "radioId_1":
				btnDown = "cooling";
				if (checkedNM) {
					if (reac1) {
						skjerm1 = "Cooling level <br>" + cooling1;
					}
					if (reac2) {
						skjerm2 = "Cooling level <br>" + cooling2;
					}
					onOff = false;
					cooling = true;
					speed = false;
					power = false;
					water = false;
					informasjon = false;
					auto = false;
					if (!reactOne) {
						skjerm1 = "Skru på reaktor";
					} else {
						skjerm1 = "Cooling level <br>" + cooling1;
					}
					if (!reactTwo) {
						skjerm2 = "Skru på reaktor";
					} else {
						skjerm2 = "Cooling level <br>" + cooling2;
					}
				}
				break;
			case "radioId_2":
				btnDown = "speed";
				if (checkedNM) {
					if (reac1) {
						skjerm1 = "Cooling level <br>" + cooling1;
					}
					if (reac2) {
						skjerm2 = "Cooling level <br>" + cooling2;
					}
					onOff = false;
					cooling = false;
					speed = true;
					power = false;
					water = false;
					informasjon = false;
					auto = false;
					if (!reactOne) {
						skjerm1 = "Skru på reaktor";
					} else {
						skjerm1 = "Speed<br>" + speed1 + "<br>RPM";
					}
					if (!reactTwo) {
						skjerm2 = "Skru på reaktor";
					} else {
						skjerm2 = "Speed<br>" + speed2 + "<br>RPM";
					}
				}
				break;
			case "radioId_3":
				btnDown = "power";
				if (checkedNM) {
					if (reac1) {
						skjerm1 = "Power<br>" + power1 + "<br>MWh";
					}
					if (reac2) {
						skjerm2 = "Power<br>" + power2 + "<br>MWh";
					}
					onOff = false;
					cooling = false;
					speed = false;
					power = true;
					water = false;
					informasjon = false;
					auto = false;
					if (!reactOne) {
						skjerm1 = "Skru på reaktor";
					} else {
						skjerm1 = "Power<br>" + power1 + "<br>MWh";
					}
					if (!reactTwo) {
						skjerm2 = "Skru på reaktor";
					} else {
						skjerm2 = "Power<br>" + power2 + "<br>MWh";
					}
				}
				break;
			case "radioId_4":
			btnDown = "water";
				if (reac1) {
					skjerm1 = "Water<br>" + water1 + "<br>m³/min";
				}
				if (reac2) {
					skjerm2 = "Water<br>" + water2 + "<br>m³/min";
				}
				if (checkedNM) {
					onOff = false;
					cooling = false;
					speed = false;
					power = false;
					water = true;
					informasjon = false;
					auto = false;
					if (!reactOne) {
						skjerm1 = "Skru på reaktor";
					} else {
						skjerm1 = "Water<br>" + water1 + "<br>m³/min";
					}
					if (!reactTwo) {
						skjerm2 = "Skru på reaktor";
					} else {
						skjerm2 = "Water<br>" + water2 + "<br>m³/min";
					}
				}
				break;
			case "radioId_5":
				btnDown = "informasjon";
				if (checkedNM) {
					onOff = false;
					cooling = false;
					speed = false;
					power = false;
					water = false;
					informasjon = true;
					auto = false;
					reactorDisplay("info");
				}
				break;
			default:
		}
		return btnDown;
	};
	const appInteraction = function(slideVal) {
		var sliderPositionNow = slideVal;
		if (onOff) {
			if (sliderPositionNow == "100") {
				if (reac1) {
					reactOne = true;
					skjerm1 = "Dra til venstre for å slå av";
				}
				if (reac2) {
					reactTwo = true;
					skjerm2 = "Dra til venstre for å slå av";
				}
			}
			if (sliderPositionNow == "1") {
				if (reac1) {
					reactOne = false;
					skjerm1 = "Dra til høyre for å slå på";
					meltCount = 0;
				}
				if (reac2) {
					reactTwo = false;
					skjerm2 = "Dra til høyre for å slå på";
					meltCount = 0;
				}
			}
			return "50";
		}
		if (cooling) {
			if (reactOne) {
				cooling1 = sliderPositionNow;
				skjerm1 = "Cooling level<br>" + cooling1;
				reactorDisplay("utregning");
			} else {
				skjerm1 = "Skru på reaktor";
			}
			if (reactTwo) {
				cooling2 = sliderPositionNow;
				skjerm2 = "Cooling level<br>" + cooling2;
				reactorDisplay("utregning");
			} else {
				skjerm2 = "Skru på reaktor";
			}

		}
		if (speed) {
			if (reactOne) {
				speed1 = sliderPositionNow;
				skjerm1 = "Speed<br>" + speed1 + "<br>RPM";
				reactorDisplay("utregning");
			} else {
				skjerm1 = "Skru på reaktor";
			}
			if (reactTwo) {
				speed2 = sliderPositionNow;
				skjerm2 = "Speed<br>" + speed2 + "<br>RPM";
				reactorDisplay("utregning");
			} else {
				skjerm2 = "Skru på reaktor";
			}

		}
		if (power) {
			//  alert(power)
			if (reactOne) {
				power1 = sliderPositionNow;
				skjerm1 = "Power<br>" + power1 + "<br>MWh";
				reactorDisplay("utregning");
			} else {
				screen1 = "Skru på reaktor";
			}
			if (reactTwo) {
				power2 = sliderPositionNow;
				skjerm2 = "Power<br>" + power2 + "<br>MWh";
				reactorDisplay("utregning");
			} else {
				skjerm2 = "Skru på reaktor";
			}

		}
		if (water) {
			if (reactOne) {
				water1 = sliderPositionNow;
				skjerm1 = "Water<br>" + water1 + "<br>m³/min";
				reactorDisplay("utregning");
			} else {
				skjerm1 = "Skru på reaktor";
			}
			if (reactTwo) {
				water2 = sliderPositionNow;
				skjerm2 = "Water<br>" + water2 + "<br>m³/min";
				reactorDisplay("utregning");
			} else {
				skjerm2 = "Skru på reaktor";
			}
		}
		return sliderPositionNow;
	};
	const reactorDisplay = function(args) {
		cooling1 = parseInt(cooling1);
		cooling2 = parseInt(cooling2);
		speed1 = parseInt(speed1);
		speed2 = parseInt(speed2);
		power1 = parseInt(power1);
		power2 = parseInt(power2);
		water1 = parseInt(water1);
		water2 = parseInt(water2);
		var cooling1MAX = speed1 * 1.10;
		var cooling1MIN = speed1 * 0.9;
		var cooling2MAX = speed2 * 1.10;
		var cooling2MIN = speed2 * 0.9;
		var speed1MAX = cooling1 * 1.10;
		var speed1MIN = cooling1 * 0.9;
		var speed2MAX = cooling2 * 1.10;
		var speed2MIN = cooling2 * 0.9;
		var power1MAX = water1 * 1.10;
		var power1MIN = water1 * 0.9;
		var power2MAX = water2 * 1.10;
		var power2MIN = water2 * 0.9;
		var water1MAX = power1 * 1.10;
		var water1MIN = power1 * 0.9;
		var water2MAX = power2 * 1.10;
		var water2MIN = power2 * 0.9;
		var melitng = "nei";
		if (args == "utregning") {
			if (reactOne) {
				c1 = "N";
				s1 = "N";
				p1 = "N";
				w1 = "N";
				c2 = "N";
				s2 = "N";
				p2 = "N";
				w2 = "N";
				if (cooling1MIN > cooling1) {
					c1 = "L";
					s1 = "H";
				}
				if (speed1MIN > speed1) {
					s1 = "L";
					c1 = "H";
				}
				if (power1MIN > power1) {
					p1 = "L";
					w1 = "H";
				}
				if (water1MIN > water1) {
					w1 = "L";
					p1 = "H";
				}
			}
			if (reactTwo) {
				if (cooling2MIN > cooling2) {
					c2 = "L";
					s2 = "H";
				}
				if (speed2MIN > speed2) {
					s2 = "L";
					c2 = "H";
				}
				if (power2MIN > power2) {
					p2 = "L";
					w2 = "H";
				}
				if (water2MIN > water2) {
					w2 = "L";
					p2 = "H";
				}
			}
		}
		if (args == "info") {
			skjerm1 = "COL:" + c1 + ", SPD:" + s1 + "<br>PWR:" + p1 + ", WTR:" + w1;
			skjerm2 = "COL:" + c2 + ", SPD:" + s2 + "<br>PWR:" + p2 + ", WTR:" + w2;
		}
		if (args == "updateDanger") {
			if (p1 == "H" || s1 == "H" || p2 == "H" || s2 == "H") {
				meltCount++
				if (meltCount == 1) {
					melting = "en";
				}
				if (meltCount == 2) {
					melting = "to";
				}
				if (meltCount == 3) {
					melting = "tre";
				}
				if (meltCount == 4) {
					melting = "fire";
				}
			} else {
				melting = "Null"
				p1 = "N";
				s1 = "N";
				p2 = "N";
				s2 = "N";
				meltCount = 0;
			}
		}
		if (meltCount > 4) {
			var screenObj = {
				"skjerm1": "Du er ferdig",
				"skjerm2": "Du er ferdig",
				"meltdownMSG": "none"
			};
		} else {
			var screenObj = {
				"skjerm1": skjerm1,
				"skjerm2": skjerm2,
				"meltdownMSG": melting
			};
		}
		return screenObj;
	};
	return {
		checkPw: checkPw,
		btnPush: btnPush,
		appInteraction: appInteraction,
		reactorDisplay: reactorDisplay
	}
}());
