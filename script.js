    const button_red = document.getElementById('button_red').addEventListener("click", red)	
    const button_green = document.getElementById('button_green').addEventListener("click", green)	
    const button_blue = document.getElementById('button_blue').addEventListener("click", blue)	
        
        function red() {
			let size = document.getElementById('value').value;
			let style = document.getElementById('select').value;
		
			if (style==="kursywa") 
			{
				document.getElementById('result').style = "color:red; font-size:"+size+"%; font-style: italic;" ;
			}
			else
			{
				document.getElementById('result').style = "color:red; font-size:"+size+"%" ;		
			}
		}

		function green() {
			let size = document.getElementById('value').value;
			let style = document.getElementById('select').value;

			
			if (style==="kursywa") 
			{
				document.getElementById('result').style = "color:green; font-size:"+size+"%; font-style: italic;" ;
			}
			else
			{
				document.getElementById('result').style = "color:green; font-size:"+size+"%" ;	
			}
		}

		function blue() {
            let size = document.getElementById('value').value;
			let style = document.getElementById('select').value;

			
			if (style==="kursywa") 
			{
				document.getElementById('result').style = "color:blue; font-size:"+size+"%; font-style: italic;" ;
			}
			else
			{
				document.getElementById('result').style = "color:blue; font-size:"+size+"%" ;	
			}
		}