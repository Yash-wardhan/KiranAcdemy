const weather = async (city) => {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c58abf46d1msh83b0ba8e680563dp19b97ejsn50fb26a4efac',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('cityInput');
    input.addEventListener('change', function() {
        var selectedCity = input.value;
        console.log(selectedCity);
        // You can do whatever you want with the selected city value here
        weather(selectedCity)
    });
});

