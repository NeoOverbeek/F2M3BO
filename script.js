function display_c(){
    var refresh=1000;
    mytime=setTimeout('display_ct()',refresh)
    }
    
    function display_ct() {
        var x = new Date()
        var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
        x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
        document.getElementById('ct').innerHTML = x1;
        display_c();
         };

         
         var ctx1 = document.getElementById('myChart');
var stars = [207, 127, 208];
var frameworks = ['Elektriciteit', 'Water', 'Gas']; 
var myChart = new Chart(ctx1, { 
    type: 'pie', 
    data: {    
        labels: frameworks,     
        datasets: [{ 
            data: stars,
            backgroundColor: [  
                "orange", "blue", "gray"
            ],
            borderColor: "",
            borderWidth: 1 
        }]      
    }, 
}) 
