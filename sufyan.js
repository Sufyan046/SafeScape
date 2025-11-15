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
let array=[]
// indianCities.forEach((e)=>{
//    array.push( `{"city": "${e}",
//     "crimeCounts": {
//         "Theft": ${parseInt(Math.random() * 80)},
//         "Robbery": ${parseInt(Math.random() * 80)},
//         "Assault": ${parseInt(Math.random() * 80)},
//         "Murder": ${parseInt(Math.random() * 80)},
//         "Burglary": ${parseInt(Math.random() * 80)},
//         "Fraud": ${parseInt(Math.random() * 80)},
//         "Kidnapping": ${parseInt(Math.random() * 80)},
//         "Domestic Violence": ${parseInt(Math.random() * 80)},
//         "Cyber Crime": ${parseInt(Math.random() * 80)},
//         "Drug Abuse": ${parseInt(Math.random() * 80)}
//    }}`)
    
// })
// console.dir(array);
indianCities.forEach((e)=>{
                    
    array.push(`<option value="${e}"></option>`)
})
console.log(array.toString().split(",").join(""));
