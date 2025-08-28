
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

    function callService(serviceName, hotlineNumber) {
      if (coinCount < 20) {
        alert(" Not enough coins to make a call.");
        return;
      }
      coinCount -= 20;
      coinCountEl.textContent = coinCount;

      alert(` Calling ${serviceName} (${hotlineNumber})`);

      const now = new Date();
      const timeString = now.toLocaleTimeString();

      const li = document.createElement("li");
        li.className = "bg-gray-100 rounded-lg p-3 shadow-sm mb-2"; 
        li.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <p class="font-semibold text-gray-800">${serviceName}</p>
                <p class="text-gray-600 text-sm">${hotlineNumber}</p>
            </div>
            <span class="text-gray-500 text-xs">${timeString}</span>
        </div>
        `;
        historyList.appendChild(li);
     
    }

    // call Clear History
    function clearHistory() {
      historyList.innerHTML = "";
    }


