var s, i=0
s=confirm("2+2=4 ?");
if (s==true) {alert("Yes!"); i++}
else alert("No!")
s=confirm("2+3=6 ?");
if (s==false) {alert("Yes!"); i++}
else alert("No!")
s=confirm("2+4=6 ?");
if (s==true) {alert("Yes!"); i++}
else alert("No!")
if (i>2) alert("best")
else if (i>1) alert("good")
else alert("bad")
alert(" suma baliv="+i)