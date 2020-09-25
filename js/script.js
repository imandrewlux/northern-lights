	var rootDiv = document.getElementById("root");
	var divisions = 100;
	var counter = 0;
	var rootWidth = window.innerWidth;
	var divWidth = rootWidth / divisions;
	var dx = 0;
	var t = 0.05;

	var r=0,g=0,b=0,topPos=45,middlePos=50,bottomPos=55;

	function targetEase(num){
		var target = num;
		dx = dx + (target - dx) * t;
		return dx;
	}

	function addDivisions(num) {
		var newDiv = document.createElement("div");
		rootDiv.appendChild(newDiv);

		if(divisions > rootWidth){
			alert("too big dude");
			return false;
		}else{
		newDiv.style.width = divWidth+"px";
		}

	}


	for( x = 0; x < divisions; x++){
		addDivisions(counter);
		counter++;
			
	}

	function getColors() {
		r =  Math.floor(Math.random() * 255);
		g =  Math.floor(Math.random() * 255);
		b =  Math.floor(Math.random() * 255);
	for(x=0;x<rootDiv.childNodes.length; x++){
		var workingDiv = rootDiv.childNodes[x];
		var divColor = workingDiv.style.background = "linear-gradient(to bottom, rgba(255,255,255,0) "+topPos+"%,rgba("+r+","+g+","+b+",1) "+middlePos+"%,rgba(255,255,255,0) "+bottomPos+"%)";		
	}
	}

	function runConst() {
		var dr = targetEase(r);
		var dg = targetEase(g);
		var db = targetEase(b);
		for(x=0;x<rootDiv.childNodes.length; x++){
		topPos = Math.floor(Math.random() * (45 - 35 + 1) + 35);
		middlePos = Math.floor(Math.random() * (52 - 47 + 1) + 47);
		bottomPos = Math.floor(Math.random() * (65 - 55 + 1) + 55);
		var workingDivv = rootDiv.childNodes[x];
		//console.log(workingDivv.style.background);
		workingDivv.style.background = "linear-gradient(to bottom, rgba(255,255,255,0) "+topPos+"%,rgba("+dr+","+dg+","+db+",1) "+middlePos+"%,rgba(255,255,255,0) "+bottomPos+"%)";
		}
	}


	setInterval(getColors, 2000);
	setInterval(runConst, 100);
