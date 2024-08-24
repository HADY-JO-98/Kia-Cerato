window.addEventListener('scroll',reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length ; i++){
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll',left);
function left(){
    var lefts = document.querySelectorAll('.left');
    for(var l = 0; l < lefts.length ; l++){
        let windowheight = window.innerHeight;
        let revealtopp = lefts[l].getBoundingClientRect().top;
        let revealpointt = 150;
        if(revealtopp < windowheight - revealpointt){
        lefts[l].classList.add('active');
        }
        else{
        lefts[l].classList.remove('active');
        }
    }
}
window.addEventListener('scroll',right);
function right(){
    var rights = document.querySelectorAll('.right');
    for(var r = 0; r < rights.length ; r++){
        let windowheight = window.innerHeight;
        let revealtoppp = rights[r].getBoundingClientRect().top;
        let revealpointtt = 150;
        if(revealtoppp < windowheight - revealpointtt){
        rights[r].classList.add('active');
        }
        else{
        rights[r].classList.remove('active');
        }
    }
}

linkes.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const index = parseInt(link.getAttribute('data-index'));
            currentindex = index;
            console.log(currentindex);
    })
});
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const models = [
        '2003',
        '2010',
        '2015',
        '2018',
        '2022',
        '2024'
    ];
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            const index = card.getAttribute('data-index');
            if (index !== null && models[index]) {
                const url = `model.html?model=${models[index]}`;
                window.location.href = url;
            } else {
                console.error('Invalid index or model not found');
            }
        });
    });
});