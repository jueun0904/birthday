function dates() {
    var x = new Date("April 3 1973 15:30:00");
    var y = new Date();
    let seconds = Math.abs(x - y)/1000;

    var day = seconds / (24 * 3600);

    hh = seconds % (24 * 3600);
    var hour = hh / 3600;
  
    hh %= 3600;
    var minutes = hh / 60 ;
  
    hh %= 60;
    var rseconds = hh;

    document.getElementById('days').innerHTML = parseInt(day);
    document.getElementById('hours').innerHTML = parseInt(hour);
    document.getElementById('minutes').innerHTML = parseInt(minutes);
    document.getElementById('seconds').innerHTML = parseInt(rseconds);
}

setInterval(dates, 1000);

function cardSelected(selectedCard) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card === selectedCard) {
            card.classList.remove('fade-out');
            card.classList.add('show'); 
        } else {
            card.classList.add('fade-out'); 
            card.classList.remove('show');
        }
    });

    // 선택한 카드 내부의 h2와 p를 표시하기
    const title = selectedCard.querySelector("h2");
    const description = selectedCard.querySelector("p");
    
    if (title && description) {
        title.style.display = "block";
        description.style.display = "block";
    }
}




document.getElementById("openBoxBtn").addEventListener("click", function() {
    document.getElementById("cake-box").style.display = "none"; // 박스 숨기기
    document.getElementById("cake").style.display = "block"; // 케이크 보이기
    document.getElementById("openBoxBtn").style.display = "none"; // 버튼 숨기기
    document.getElementById("candlesOnBtn").style.display = "block"; // 새로운 버튼 보이기
});

document.getElementById("candlesOnBtn").addEventListener("click", function() {
    document.getElementById("candle").style.display = "block"; // 촛불 보이기
});
