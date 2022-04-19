// refreshed de pagina iedere seconde om alles up to date te houden
function display_c(){
    var refresh=1000;
    mytime=setTimeout('display_ct()',refresh)
    }
    

// De datum en tijd actueel.
function display_ct() {
    var x = new Date()
    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
    x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
    document.getElementById('ct').innerHTML = x1;
    display_c();
    };

// De pie chart
var ctx1 = document.getElementById('myChart');
var stars = [207, 127, 208];
var frameworks = ['Elektriciteit', 'Water', 'Gas']; 
var myChart = new Chart(ctx1, { 
    type: 'doughnut', 
    data: {    
        labels: frameworks,     
        datasets: [{ 
            data: stars,
            backgroundColor: [  
                "pink", "rgba(119, 189, 255)", "rgba(80, 189, 149)"
            ],
            borderColor: "rgba(255, 255, 255, 0.5)",
            borderWidth: 5 
        }]      
    }, 
}) 

var theChart = document.getElementById("mySecondChart");
var chartData = [78, 123, 160, 167, 130, 110, 144, 112, 156, 145, 120, 130, 144, 98, 119, 150, 129, 134, 148, 99, 154, 144, 143, 132, 135, 120, 139, 111, 156, 132, 109];
var label = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var waterChart = new Chart(theChart, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: "Water begruikt deze maand",
            data: chartData,
            backgroundColor: ['rgba(0, 98, 160)',
            ],
            borderColor: "rgba(0, 98, 160, 0.5)",
            borderWidth: 3
        }]
    }
})

