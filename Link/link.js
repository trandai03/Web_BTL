
        let reactions = {
            like: 0,
            love: 0,
            haha: 0
        };

        function reactToPost(reaction) {
            if (reaction in reactions) {
                reactions[reaction]++;
                updateReactionCount(reaction);
                updateTotalReactions();
            }
        }
        function updateReactionCount(reaction) {
            const reactionCountElement = document.querySelector(`.${reaction}-count`);
            reactionCountElement.textContent = reactions[reaction];
        }
        function updateTotalReactions() {
            const totalElement = document.querySelector('.reaction-total');
            const total = reactions.like + reactions.love + reactions.haha;
            totalElement.textContent = `Da Nhan: ${total}`;
        }
// Initialize variables outside the function
let isLiked = false;
let likeCount = 0;

function toggleLike(element) {
  if (isLiked) {
    likeCount--;
  } else {
    likeCount++;
  }

  isLiked = !isLiked;

  element.nextElementSibling.textContent = likeCount;
  element.classList.toggle("active", isLiked);
}
