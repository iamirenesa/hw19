const btnGetLink = document.getElementById('btnPrompt');
const btnGoToLink = document.getElementById('btnLink');
let link;

btnGetLink.onclick = function() {
    link = prompt("Write link");
    let string = `http`;
    for (let i = 0; i < link.length; i++) {
        if (link.includes(string)) {
            continue;
        } else {
            link = string.concat('s://' + link);
        }
    }
}

btnGoToLink.onclick = function() {
    location.href = link;
}



