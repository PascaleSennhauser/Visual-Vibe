/**
 * This function gets invoked in the beginning to show the post from the array posts.
 */
function show() {
    document.getElementById('post-section').innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        document.getElementById('post-section').innerHTML += showPosts(post, i);
    }
}


/**
 * This function shows all the comments from a post.
 * @param {Number} postIndex - The current index of the post.
 */
function showComments(postIndex) {
    document.getElementById(`commentsDescription${postIndex}`).classList.add('d-none');
    const post = posts[postIndex];
    let commentSection = document.getElementById(`onlyComments${postIndex}`);
    commentSection.classList.add('black');
    commentSection.innerHTML = sectionComments(postIndex);
    for (let i = 0; i < post['comments'].length; i++) {
        let allComments = document.getElementById(`allComments${postIndex}`);
        const comment = post['comments'][i];
        allComments.innerHTML += /*html*/`
        <div class="show-comment">${comment}</div>
    `;
    }
}


/**
 * This function sets the comment section, so the comments can be shown.
 * @param {Numbeer} postIndex - The current index of the post.
 * @returns The html-elemnt of the comment-section.
 */
function sectionComments(postIndex) {
    return /*html*/`
    <div id="commentAndClose${postIndex}">
        <button class="close-btn" onclick="closeComments(${postIndex})">Schliessen</button>
        <div id="allComments${postIndex}"></div>
    </div>
`;
}


/**
 * This function closes the comment-section.
 * @param {Number} postIndex - The current index of the post.
 */
function closeComments(postIndex) {
    let commentSection = document.getElementById(`onlyComments${postIndex}`);
    commentSection.innerHTML = '';
    commentSection.classList.remove('black');
    document.getElementById(`commentsDescription${postIndex}`).classList.remove('d-none');
}


/**
 * This function adds a comment to the post.
 * @param {Number} postIndex - The current index of the post. 
 */
function addComment(postIndex) {
    let input = document.getElementById(`input${postIndex}`);
    if (input.value !== '') {
        posts[postIndex]['comments'].push(input.value);
        posts[postIndex]['commentsCount']++;
    } else {
        alert('Bitte gebe einen Kommentar ein.');
    }
    show();
}


/**
 * This function is to give or remove a like to the post, when you click on the heart.
 * @param {Number} postIndex - The current index of the post.
 */
function like(postIndex) {
    let heart = posts[postIndex]['heart'];
    if (heart == './img/heart-regular.svg') {
        posts[postIndex]['likeCount']++;
        posts[postIndex]['heart'] = './img/heart-solid.svg';
    } else {
        posts[postIndex]['likeCount']--;
        posts[postIndex]['heart'] = './img/heart-regular.svg';
    }
    show();
}


/**
 * This function saves or removes the save from a post, when you click on the bookmark-icon.
 * @param {Number} postIndex - The current index of the post.
 */
function save(postIndex) {
    let saveIcon = posts[postIndex]['saveIcon'];
    if (saveIcon == './img/bookmark-regular.svg') {
        posts[postIndex]['saveIcon'] = './img/bookmark-solid.svg';
    } else {
        posts[postIndex]['saveIcon'] = './img/bookmark-regular.svg';
    }
    show();
}


/**
 * This function shows the overlay-menu, when you click on the burger-menu in the responsive design.
 */
function showOverlay() {
    document.getElementById('overlay').classList.add('show-overlay');
}


/**
 * This function removes the overlay-menu, when you click on the burger-menu in the responsive design.
 */
function closeOverlay() {
    document.getElementById('overlay').classList.remove('show-overlay');
}