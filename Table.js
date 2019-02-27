myfinal = function()
{
  var table = document.getElementById('Grades');
  var sum = 0;
    for (var i = 1; i < table.rows.length; i++) 
    {
    for (var j = 2; j < table.rows[i].cells.length-1; j++)
    {
        
        		if(table.rows[i].cells[j].innerHTML === "-")
            {
            	sum += 0; 
            }

        		else if(table.rows[i].cells[j].innerHTML != "")
            {
            	sum += parseInt(table.rows[i].cells[j].innerHTML);
            } 
    }
        
        if(table.rows[i].cells[7].innerHTML === "NaN%")
        {
          table.rows[i].cells[7].innerHTML = "0%"; 
        }
        		
        else
        {
        	table.rows[i].cells[7].innerHTML = Math.round(sum/5) +"%";
				}
             
        if(parseInt(table.rows[i].cells[7].innerHTML) < 40)
        {
        		table.rows[i].cells[7].style.backgroundColor = "red";
            table.rows[i].cells[7].style.color = "white";
        }
        
        else
        {
            table.rows[i].cells[7].style.color = "black";
            table.rows[i].cells[7].style.backgroundColor = "white";
            
				}
        sum = 0;
		}
} 

setInterval(function(){myfinal() }, 3000);
//calls the function myfinal every 3000 milliseconds
