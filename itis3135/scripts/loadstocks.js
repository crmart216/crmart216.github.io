const load = document.getElementById("loadStocks");
const containers = Array.from(document.getElementsByClassName("tip"));
const getData = (number) => {
    const apiUrl = `https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=wRXm1yrJV7pox2jYIPJYI7snlhJlXJIM`;
    const apiData = fetch(apiUrl).then((response) => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    }).then((data) => {
        setTimeout(containers.forEach((cont) => {
            cont.innerText = `${containers.indexOf(cont) + 1}. ${data["tickers"][containers.indexOf(cont)]["ticker"]} :|: Change ${parseFloat(data["tickers"][containers.indexOf(cont)]["todaysChangePerc"]).toFixed(2)}%  :|: Change \$${parseFloat(data["tickers"][containers.indexOf(cont)]["todaysChange"]).toFixed(2)} :|: Last closing price \$${parseFloat(data["tickers"][containers.indexOf(cont)]["day"]["c"]).toFixed(2)}`;
        }),2000);
        console.log("Updated!");
    }).catch((error) => {
        console.error('Error:', error);
    });

    return apiData;
};

const updateStocksWhileLoaded = () => {
    getData();
    const id = window.setInterval(getData, 5000);
    
};

window.onload = () => {
    setTimeout(updateStocksWhileLoaded(),4000);
};
