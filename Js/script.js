
let coinCount = 100;
    let heartCount = 0;
    let copyCount = 0;

    const coinCountEl = document.getElementById("coinCount");
    const heartCountEl = document.getElementById("heartCount");
    const copyCountEl = document.getElementById("copyCount");
    const historyList = document.getElementById("historyList");

// Increase heart count

    function increaseHeart() {
      heartCount++;
      heartCountEl.textContent = heartCount;
    }

// copy number 
    function copyNumber(number) {
      navigator.clipboard.writeText(number).then(() => {
        alert(" Number copied: " + number);
        copyCount++;
        copyCountEl.textContent = copyCount;
      });
    }

    


