/**
 * This function shows a post.
 * @param {Array} post - The current Array from the JSON-Array posts.
 * @param {Number} i - The current index.
 * @returns The html-element of a post-section gets returned.
 */
function showPosts(post, i) {  
    return /*html*/`<div class="post-container">
                <div class="post-header">
                    <img src="${post['imgHeader']}" class="img-person-post">
                    <div class="title-description">
                        <div class="title-top">
                            <span><b class="name-post">${post['name']}</b> <span class="gray">• ${post['weeks']} Wo. •</span> <b class="follow-post">Folgen</b></span>
                        </div>
                        <div class="title-bottom">
                            <span class="location">${post['location']}</span>
                        </div>
                    </div>
                </div>

                <div class="img-container">
                    <img src="${post['img']}" class="img-post">
                </div>

                <div class="icons-post">
                    <div class="icons-left">
                        <img src=${post['heart']} class="heart-icon icon-post" id="heart${i}" onclick="like(${i})">
                        <img src="./img/comment-regular.svg" class="comment-icon icon-post">
                        <img src="./img/paper-plane-regular.svg" class="message-icon icon-post">
                    </div>
                    <div class="icon-right">
                        <img src=${post['saveIcon']}  class="bookmark-icon icon-post" id="bookmark${i}" onclick="save(${i})">
                    </div>
                </div>

                <div class="likes">
                    <span class="likes-text"><b>Gefällt ${post['likeCount']} Mal</b></span>
                </div>

                <div class="description">
                    <span><b class="description-name">${post['name']}</b> ${post['description']}</span>
                </div>

                <div class="comments gray" id="commentsContainer${i}">
                    <span id="commentsDescription${i}" onclick="showComments(${i})">Alle ${post['commentsCount']} Kommentare ansehen</span>
                    <div id="onlyComments${i}"></div>
                </div>

                <div class="input-div">
                    <form onsubmit="addComment(${i})">
                        <input id="input${i}" class="input gray" type="text" placeholder="Kommentieren ...">
                    </form>
                </div>
            </div>`;
}