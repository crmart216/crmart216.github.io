const path = "" + document.getElementById("load").dataset.info;
const path2 = path.split(",");



$(function() {
    $("#header").load(path2[0]+"/components/" + path2[1]);
});
$(function() {
    $('#footer').load(path2[0]+"/components/footer.html");
});