document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const inputValue = document.getElementById("textInput").value;

    const inputDisplayContainer = document.getElementById("inputDisplayContainer");
    const inputContainer = document.createElement("div");
    inputContainer.className = "inputContainer";
    inputContainer.textContent = inputValue;
    inputDisplayContainer.appendChild(inputContainer);

    // Save input value to local storage
    saveToLocalStorage(inputValue);

    document.getElementById("textInput").value = '';
});
// Function to save input value to local storage
function saveToLocalStorage(value) {
    const savedValues = JSON.parse(localStorage.getItem("savedValues")) || [];
    savedValues.push(value);
    localStorage.setItem("savedValues", JSON.stringify(savedValues));
}

// Load saved values from local storage
function loadFromLocalStorage() {
    const savedValues = JSON.parse(localStorage.getItem("savedValues")) || [];
    const inputDisplayContainer = document.getElementById("inputDisplayContainer");
    savedValues.forEach(function (value) {
        const inputContainer = document.createElement("div");
        inputContainer.className = "inputContainer";
        inputContainer.textContent = value;
        inputDisplayContainer.appendChild(inputContainer);
    });
}

// Load saved values when the page loads
loadFromLocalStorage();



function createEmojis() {
    const emojiContainer = document.createElement("div");
    emojiContainer.className = "emojiContainer";

    

    const likeContainer = document.createElement("span");
    likeContainer.className = "emojiWithCounter";

    const likeEmoji = document.createElement("span");
    likeEmoji.textContent = "👍";
    likeEmoji.className = "likeEmoji";

    const likeCounter = document.createElement("span");
    likeCounter.textContent = "0";
    likeCounter.className = "likeCounter";

    likeContainer.appendChild(likeEmoji);
    likeContainer.appendChild(likeCounter);

    const shareEmoji = document.createElement("span");
    shareEmoji.textContent = "📤";
    shareEmoji.className = "shareEmoji";

    const commentsEmoji = document.createElement("span");
    commentsEmoji.textContent = "💬";
    commentsEmoji.className = "commentsEmoji";

    const commentsDropdown = document.createElement("div");
    commentsDropdown.className = "commentsDropdown";

    commentsEmoji.addEventListener("click", function () {
        if (commentsDropdown.style.display === "block") {
            commentsDropdown.style.display = "none";
        } else {
            commentsDropdown.style.display = "block";
        }
    });

    emojiContainer.appendChild(likeContainer);
    emojiContainer.appendChild(shareEmoji);
    emojiContainer.appendChild(commentsEmoji);
    emojiContainer.appendChild(commentsDropdown);

    // Add event listener for like emoji
    likeContainer.addEventListener("click", function () {
        likeCounter.textContent = parseInt(likeCounter.textContent) + 1;
    });

    return emojiContainer;
}

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const inputValue = document.getElementById("textInput").value;

    const inputDisplayContainer = document.getElementById("inputDisplayContainer");
    const inputContainer = document.createElement("div");
    inputContainer.className = "inputContainer";
    inputContainer.textContent = inputValue;

    const emojisContainer = createEmojis();
    inputContainer.appendChild(emojisContainer);

    inputDisplayContainer.appendChild(inputContainer);

    // Save input value to local storage
    saveToLocalStorage(inputValue);

    document.getElementById("textInput").value = '';
});





