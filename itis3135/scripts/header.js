
const pageTitle = document.getElementById("titleText");

const titleSplit = document.title.split("||");
if (titleSplit.length === 3) {
    pageTitle.innerText = ` ${titleSplit[2]}`;
} else {
    pageTitle.innerText = ` ${titleSplit[1]}`;
}



/*pageTitle.innerText = ` ${document.title.split("||")[1]}`;*/



