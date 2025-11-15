let myChart;
let chart2;
let type1;
let type3;
const ctx = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('chart2').getContext('2d');
document.getElementById('search').disabled = true;
document.getElementById('type1').disabled = true;
document.getElementById('search').style.opacity = "0.7";

async function main() {
    document.getElementById('temp').style.display = "none";
    document.getElementById('temp2').style.display = "none";

    let SelectedLoaction = document.getElementById('location').value;
    let CrimeType = document.getElementById('CrimeType').value;
    if (SelectedLoaction != "") {
        // document.getElementById('search').style.opacity="1";
document.getElementById('myChart').style.height="198px";

        const indianCities = [
            "Delhi", "Mumbai", "Kolkata", "Chennai", "Bengaluru",
            "Hyderabad", "Ahmedabad", "Pune", "Surat", "Jaipur",
            "Lucknow", "Kanpur", "Nagpur", "Indore", "Chandigarh",
            "Bhopal", "Patna", "Vadodara", "Visakhapatnam", "Nashik",
            "Agra", "Meerut", "Faridabad", "Rajkot", "Ludhiana",
            "Coimbatore", "Madurai", "Noida", "Kochi", "Vijayawada",
            "Mysuru", "Jammu", "Guwahati", "Aurangabad", "Dhanbad",
            "Ranchi", "Jabalpur", "Dehradun", "Udaipur", "Bhubaneswar",
            "Belagavi", "Haridwar"
        ];

        const city1 =document.getElementById('othercities1').value||indianCities[parseInt(Math.random() * 40)];
        const city2 =document.getElementById('othercities2').value|| indianCities[parseInt(Math.random() * 40)];
        const city3 =document.getElementById('othercities3').value|| indianCities[parseInt(Math.random() * 40)];
        const city4 =document.getElementById('othercities4').value|| indianCities[parseInt(Math.random() * 40)];
        const city5 =document.getElementById('othercities5').value|| indianCities[parseInt(Math.random() * 40)];
        

        if (myChart) myChart.destroy();
        if (chart2) chart2.destroy();
        async function getCrimeCount(cityName, crimeType) {
            const response = await fetch('database.json');
            const crimeData = await response.json();

            const cityData = crimeData.data.find(city => city.city === cityName);

            if (cityData && cityData.crimeCounts[crimeType]) {
                return cityData.crimeCounts[crimeType];
            } else {
                return parseInt(Math.random() * 70)

            }
        }
        const cityData = [
            await getCrimeCount(SelectedLoaction, CrimeType), await getCrimeCount(city1, CrimeType), await getCrimeCount(city2, CrimeType), await getCrimeCount(city3, CrimeType), await getCrimeCount(city4, CrimeType), await getCrimeCount(city5, CrimeType)
        ];
        let ayyan = await getCrimeCount('Mumbai', 'Assault')
        console.log(ayyan);

        myChart = new Chart(ctx, {
            type: type1 || 'bar',
            data: {
                labels: [SelectedLoaction, city1, city2, city3, city4, city5],
                datasets: [{
                        label: 'Searched Location',
                        data: [cityData[0]],
                        borderWidth: 2,
                        backgroundColor: '#FF7E67',
                    },
                    {
                        label: "Other Locations for comparision",
                        data: cityData.slice(0, 6),
                        backgroundColor: '#50B83C',
                    }
                ]
            },
            options: {
                responsive: false, 
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Line Chart
        chart2 = new Chart(ctx2, {
            type: type3 || 'doughnut',
            data: {
                labels: [SelectedLoaction, city1, city2, city3, city4, city5],
                datasets: [{
                        label: 'Line Chart Example',
                        data: [cityData[0]],
                        borderColor: '#FF7E67',
                        borderWidth: 2,
                        fill: false
                    },
                    {
                        label: CrimeType,
                        data: cityData.slice(0, 6),
                        backgroundColor: '#50B83C',
                    }
                ]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
                
            }
        });

        document.getElementById('ul').innerHTML = `
        <li><span>${SelectedLoaction}</span><span>${cityData[0]}</span></li>
        <li><span>${city1}</span><span>${cityData[1]}</span></li>
        <li><span>${city2}</span><span>${cityData[2]}</span></li>
        <li><span>${city3}</span><span>${cityData[3]}</span></li>
        <li><span>${city4}</span><span>${cityData[4]}</span></li>
        <li><span>${city5}</span><span>${cityData[5]}</span></li>
    `;

        for (let i = 0; i < 20; i++) {
            let curcity = indianCities[parseInt(Math.random() * 40)]
            document.getElementById('ul').innerHTML += `
            <li>
                <span>${curcity}</span>
                <span>${await getCrimeCount(curcity, CrimeType)}</span>
            </li>`;
        }
    } else {

        document.getElementById('temp').innerHTML = `<h2>Please Select a Location</h2>`;

    }

}

function type2() {
    type1 = document.getElementById('type1').value || 'bar';
  
    charts = ["bar", "doughnut", "radar"]
    if (type1 === "bar") {
        type3 = "doughnut"
    } else {
        type3 = "bar"
    }
    console.log(type3);
    main()

}

function onkey() {
    document.getElementById('search').style.opacity = "1";
    document.getElementById('search').disabled = false;
    document.getElementById('type1').disabled = false;


}
