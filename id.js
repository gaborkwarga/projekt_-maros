<html>
<script>
		function myFunction() {
			Date.prototype.getWeekNumber = function(){
			var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
			var dayNum = d.getUTCDay() || 7;
			d.setUTCDate(d.getUTCDate() + 4 - dayNum);
			var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
			return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
			};

		document.write('A mostani hét száma  ' + new Date().getWeekNumber()+ '\n');
  


		var g = new Date().getWeekNumber()
			if (g % 2 == 0) {
				document.write('<br>');
				document.write ('A mai dátum: ' + new Date() + '\n');
				g = document.write ("páros hét van");
			} else {
				document.write ('A mai dátum: '+ new Date() + '\n');
				g =  document.write ("páratlan hét van");
				}
			document.getElementById("demo").innerHTML = g;
		}
</script>	
<html>