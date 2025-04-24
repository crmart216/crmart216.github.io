const load = document.getElementById("loadStocks");
const containers = Array.from(document.getElementsByClassName("tip"));
const filterTitle = document.getElementById("filterTitle");
const filterDropDown = document.getElementById("filter_drop_down");
let filter = filterDropDown.value;

filterDropDown.addEventListener("change", function() {
    filter = String(this.value);
    displayLoading();
    getData();
    filterTitle.innerText = this.options[this.selectedIndex].text;
});

const addCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  

const updateContainers = (unsorted) => {
    containers.forEach((cont) => {
        try {
            cont.innerText = `${containers.indexOf(cont) + 1}. ${unsorted[containers.indexOf(cont)]["ticker"]} :|: Change ${parseFloat(unsorted[containers.indexOf(cont)]["todaysChangePerc"]).toFixed(2)}% :|: Last closing price \$${addCommas(parseFloat(unsorted[containers.indexOf(cont)]["day"]["c"]).toFixed(2))} :|: Times Traded Today ${addCommas(unsorted[containers.indexOf(cont)]["min"]["av"])}`;
        } catch {
            cont.innerText = `${containers.indexOf(cont) + 1}. API ERROR`
        }
    });
};

const displayLoading = () => {
    containers.forEach((cont) => {
        cont.innerText = "Loading..."
    })
}

const displayOtherMessage = (message) => {
    containers.forEach(cont => {
        cont.innerText = message;
    })
}

const getData = () => {
    const apiUrl = `https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?apiKey=SCu2FspoAB0TIbpu2cvFqHO_VFtnQ4Mu`;
    const apiData = fetch(apiUrl).then((response) => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    }).then((data) => {
        const unsorted = data["tickers"];
        console.log(unsorted);
        setTimeout(() => {
            switch (filter){
                default: 
                    displayOtherMessage("Error");
                case "price":
                    unsorted.sort((a,b) => {
                        if (a.day.c < b.day.c) {
                            return 1;
                        }
                        if (a.day.c > b.day.c) {
                            return -1;
                        }
                        return 0;
                    });
                    updateContainers(unsorted);
                    break;
                case "change":
                    unsorted.sort((a,b) => {
                        if (a.todaysChangePerc < b.todaysChangePerc) {
                            return 1;
                        }
                        if (a.todaysChangePerc > b.todaysChangePerc) {
                            return -1;
                        }
                        return 0;
                    });
                    updateContainers(unsorted);
                    break;
                case "mostTraded":
                    unsorted.sort((a,b) => {
                        if (a.min.av < b.min.av) {
                            return 1;
                        }
                        if (a.min.av > b.min.av) {
                            return -1;
                        }
                        return 0;
                    });
                    updateContainers(unsorted);
                    break;
            }
        }, 2000);
        console.log("Updated!");
    }).catch((error) => {
        console.error('Error:', error);
    });

    return apiData;
};

window.onload = () => {
    displayLoading();
    setTimeout(getData(), 1000);
};

