		'use strict';

		const sz = function() {
			const ele = document.getElementById("tBody");
			const ile = ele.offsetWidth;
			return ile;
		};



		function view(str,cos) {
		document.getElementById("nagl").innerHTML = str + " >> " + sz();	
		}
		
		view("zzzzzzzzzzxxxxxxxxxx",sz);

