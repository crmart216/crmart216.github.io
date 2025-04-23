const load = document.getElementById("loadStocks");
const containers = Array.from(document.getElementsByClassName("tip"));
const getData = (number) => {
    const apiUrl = `https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=SCu2FspoAB0TIbpu2cvFqHO_VFtnQ4Mu`;
    const apiData = fetch(apiUrl).then((response) => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    }).then((data) => {
        let x = 1;
        setTimeout(containers.forEach((cont) => {
            if (!data["tickers"][containers.indexOf(cont)]) {
                cont.innerText = `${x}. API Error`;
            } else {
                cont.innerText = `${containers.indexOf(cont) + 1}. ${data["tickers"][containers.indexOf(cont)]["ticker"]} :|: Change ${parseFloat(data["tickers"][containers.indexOf(cont)]["todaysChangePerc"]).toFixed(2)}%  :|: Change \$${parseFloat(data["tickers"][containers.indexOf(cont)]["todaysChange"]).toFixed(2)} :|: Last closing price \$${parseFloat(data["tickers"][containers.indexOf(cont)]["day"]["c"]).toFixed(2)}`;
            }
            x++;
        }),2000);
        console.log("Updated!");
    }).catch((error) => {
        console.error('Error:', error);
    });

    return apiData;
};


window.onload = () => {
    setTimeout(getData()), 4000;
};
