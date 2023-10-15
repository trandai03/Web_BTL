
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
            } else if (reactionName === 'btnReactionLove') {
                tymCount--;
            }else if (reactionName === 'btnReactionStar') {
                starCount--;
            }else if (reactionName === 'btnReactionClap') {
                clapCount--;
            }
            
            previousReactionButton = null; 
        } else {
            
            if (previousReactionButton) {
                const previousReactionName = previousReactionButton.getAttribute('name');
                if (previousReactionName === 'btnReactionLike') {
                    likeCount--;
                } else if (previousReactionName === 'btnReactionLove') {
                    tymCount--;
                }else if (previousReactionName === 'btnReactionStar') {
                    starCount--;
                }else if (previousReactionName === 'btnReactionClap') {
                    clapCount--;
                }
            }

            if (reactionName === 'btnReactionLike') {
                likeCount++;
            } else if (reactionName === 'btnReactionLove') {
                tymCount++;
            } else if (reactionName === 'btnReactionStar') {
                starCount++;
            }else if (reactionName === 'btnReactionClap') {
                clapCount++;
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