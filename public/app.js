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

    // Save input value and emoji data to local storage
    saveToLocalStorage(inputValue, {
        likeCounter: 0, // Initialize like counter
        comments: [] // Initialize comments array
    });

    document.getElementById("textInput").value = '';
});

function saveToLocalStorage(value, emojiData) {
    console.log("Saving data to local storage:", value, emojiData);

    const savedData = JSON.parse(localStorage.getItem("savedData")) || [];
    savedData.push({ value, emojiData });
    localStorage.setItem("savedData", JSON.stringify(savedData));
}

function loadFromLocalStorage() {
    const savedData = JSON.parse(localStorage.getItem("savedData")) || [];
    const inputDisplayContainer = document.getElementById("inputDisplayContainer");

    savedData.forEach(function (data) {
        const inputContainer = document.createElement("div");
        inputContainer.className = "inputContainer";
        inputContainer.textContent = data.value;

        inputDisplayContainer.appendChild(inputContainer);

        // Check if emojiData exists before creating emojis
        if (data.emojiData) {
            const emojisContainer = createEmojis();
            inputContainer.appendChild(emojisContainer);

            // Update like counter based on saved data
            const likeCounter = emojisContainer.querySelector(".likeCounter");

            if (likeCounter) {
                likeCounter.textContent = data.emojiData.likeCounter;
            }
        }
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

    // const shareEmoji = document.createElement("span");
    // shareEmoji.textContent = "📤";
    // shareEmoji.className = "shareEmoji";

    const commentsEmoji = document.createElement("span");
    commentsEmoji.textContent = "💬";
    commentsEmoji.className = "commentsEmoji";

    const commentsDropdown = document.createElement("div");
    commentsDropdown.className = "commentsDropdown";

    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "Add a comment";
    commentInput.style.display = "none"; // Hide initially

    const addCommentButton = document.createElement("button");
    addCommentButton.textContent = "Add Comment";
    addCommentButton.addEventListener("click", function () {
        const commentText = commentInput.value;
        if (commentText) {
            // Find the index of the post in savedData
            const inputContainer = emojiContainer.closest(".inputContainer");
            const index = Array.from(inputContainer.parentElement.children).indexOf(inputContainer);

            // Update the comments array in emojiData and save to local storage
            const savedData = JSON.parse(localStorage.getItem("savedData")) || [];
            if (savedData[index] && savedData[index].emojiData) {
                savedData[index].emojiData.comments.push(commentText);
                localStorage.setItem("savedData", JSON.stringify(savedData));

                // Refresh the comments display
                refreshCommentsDisplay(commentsDropdown, savedData[index].emojiData.comments);
            }

            // Clear input field and hide it
            commentInput.value = "";
            commentInput.style.display = "none";
        }
    });


    commentsDropdown.appendChild(commentInput);
    commentsDropdown.appendChild(addCommentButton);

    // Show/hide comment input when comments emoji is clicked
    commentsEmoji.addEventListener("click", function () {
        if (commentsDropdown.style.display === "block") {
            commentsDropdown.style.display = "none";
            commentInput.style.display = "none";
        } else {
            commentsDropdown.style.display = "block";
            commentInput.style.display = "block";
        }
    });

    emojiContainer.appendChild(likeContainer);
    // emojiContainer.appendChild(shareEmoji);
    emojiContainer.appendChild(commentsEmoji);
    emojiContainer.appendChild(commentsDropdown);

    // Add event listener for like emoji
    likeContainer.addEventListener("click", function () {
        const currentLikeCount = parseInt(likeCounter.textContent);
        const updatedLikeCount = currentLikeCount + 1;
        likeCounter.textContent = updatedLikeCount;

        // interactevent handling
        async () => {
            const userID = session.userID
            const thing = e.target.className
            const action = 'like'

            const response = await fetch('/api/recc', {
                method: 'POST',
                body: JSON.stringify({ userID, thing, action }),
                headers: { 'Content-Type': 'application/json' },
            })
        }

        // Update the like counter in emojiData and save to local storage
        const inputContainer = likeContainer.closest(".inputContainer");
        const index = Array.from(inputContainer.parentElement.children).indexOf(inputContainer);

        const savedData = JSON.parse(localStorage.getItem("savedData")) || [];
        savedData[index].emojiData.likeCounter = updatedLikeCount;
        localStorage.setItem("savedData", JSON.stringify(savedData));
    });

    return emojiContainer;
}

function refreshCommentsDisplay(commentsDropdown, comments) {
    commentsDropdown.innerHTML = ""; // Clear existing comments

    comments.forEach(function (comment) {
        const commentText = document.createElement("div");
        commentText.textContent = comment;
        commentsDropdown.appendChild(commentText);
    });

}