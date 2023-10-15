const reactText = document.querySelector('.react-button > p');
const reactButton = document.querySelector('.react-button');
const reactClick = document.querySelector('.react-click');
const reactButtons = document.querySelectorAll('.button-react');
const likeCountElement = document.querySelector('.like-number');
const tymCountElement = document.querySelector('.tym-number');
const clapCountElement = document.querySelector('.clapping-number');
const starCountElement = document.querySelector('.star-number');
const totalCountElement = document.querySelector('.total');

var likeCount = parseInt(likeCountElement.textContent); 
var tymCount = parseInt(tymCountElement.textContent); 
var clapCount = parseInt(clapCountElement.textContent);
var starCount = parseInt(starCountElement.textContent);
var total = parseInt(totalCountElement.textContent);


var reactClickVisible = false;


reactButton.addEventListener('click', function() {
    if (!reactClickVisible) {

        reactClick.style.display = 'flex';
        reactClickVisible = true;
    } else {
  
        reactClick.style.display = 'none';
        reactClickVisible = false;
    }
});

const reactionStates = {
    btnReactionLike: false, 
    btnReactionLove: false, 
    btnReactionStar: false,
    btnReactionClap: false,
};

var previousReactionButton = null;


reactButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const reactionName = this.getAttribute('name');

        if (previousReactionButton === button) {
         
            if (reactionName === 'btnReactionLike') {
                likeCount--;
                reactText.innerHTML = "Bài viết hay? Hãy tặng sao cho tác giả";
            } else if (reactionName === 'btnReactionLove') {
                tymCount--;
                reactText.innerHTML = "Bài viết hay? Hãy tặng sao cho tác giả";
            }else if (reactionName === 'btnReactionStar') {
                starCount--;
                reactText.innerHTML = "Bài viết hay? Hãy tặng sao cho tác giả";
            }else if (reactionName === 'btnReactionClap') {
                clapCount--;
                reactText.innerHTML = "Bài viết hay? Hãy tặng sao cho tác giả";
            }
            
            previousReactionButton = null; 
        } else {
            
            if (previousReactionButton) {
                const previousReactionName = previousReactionButton.getAttribute('name');
                if (previousReactionName === 'btnReactionLike') {
                    likeCount--;
                    reactText.innerHTML = "Bài viết hay? Hãy tặng sao cho tác giả";
                } else if (previousReactionName === 'btnReactionLove') {
                    tymCount--;
                    reactText.innerHTML = "Bài viết hay? Hãy tặng sao cho tác giả";
                }else if (previousReactionName === 'btnReactionStar') {
                    starCount--;
                    reactText.innerHTML = "Bài viết hay? Hãy tặng sao cho tác giả";
                }else if (previousReactionName === 'btnReactionClap') {
                    clapCount--;
                    reactText.innerHTML = "Bài viết hay? Hãy tặng sao cho tác giả";
                }
            }

            if (reactionName === 'btnReactionLike') {
                likeCount++;
                reactText.innerHTML = "Bạn đã tặng sao &quot;Bổ ích&quot; cho tác giả";
            } else if (reactionName === 'btnReactionLove') {
                tymCount++;
                reactText.innerHTML = "Bạn đã tặng sao &quot;Xúc động&quot; cho tác giả";
            } else if (reactionName === 'btnReactionStar') {
                starCount++;
                reactText.innerHTML = "Bạn đã tặng sao &quot;Độc đáo&quot; cho tác giả";
            }else if (reactionName === 'btnReactionClap') {
                clapCount++;
                reactText.innerHTML = "Bạn đã tặng sao &quot;Cảm hứng&quot; cho tác giả";
            }

            previousReactionButton = button; 
        }

        total = likeCount + tymCount + starCount + clapCount;
        likeCountElement.textContent = likeCount;
        tymCountElement.textContent = tymCount;
        starCountElement.textContent = starCount;
        clapCountElement.textContent = clapCount;
        totalCountElement.textContent = total;
        reactClick.style.display = 'none';
        reactClickVisible = false;
    });
});