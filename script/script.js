let posts = [
    {
        'imgHeader': './img/person/person3.jpg',
        'name': 'ballet_barbara123',
        'weeks': 11,
        'location': 'Dance-Center Zürich',
        'img': './img/post-img/dance.jpg',
        'heart': './img/heart-regular.svg',
        'likeCount': 30,
        'saveIcon': './img/bookmark-regular.svg',
        'description': `It's always been my passion. When I dance, I feel free ❤️ What is your biggest passion?`,
        'commentsCount': 3,
        'comments': ['Wow, sieht super aus.', 'My passion is football. ❤️', 'Ich liebe es auch zu tanzen.']
    },

    {
        'imgHeader': './img/person/person2.jpg',
        'name': 'max.muster',
        'weeks': 12,
        'location': 'Winterthur',
        'img': './img/post-img/dog.jpg',
        'heart': './img/heart-regular.svg',
        'likeCount': 41,
        'saveIcon': './img/bookmark-regular.svg',
        'description': `A quick walk with my dog 🌳`,
        'commentsCount': 2,
        'comments': ['Jöö 😍', 'Ich liebe Hunde. 🐕']
    },

    {
        'imgHeader': './img/person/person1.jpg',
        'name': 'travel_mara',
        'weeks': 12,
        'location': 'Spain',
        'img': './img/post-img/beach.jpg',
        'heart': './img/heart-regular.svg',
        'likeCount': 30,
        'saveIcon': './img/bookmark-regular.svg',
        'description': `Enjoying my holidays at the beach 🏖️`,
        'commentsCount': 3,
        'comments': ['Wo genau in Spanien bist du?', 'Geniesse deine Ferien 😊', 'Mega schönes Foto!!!']
    },

];


function show() {
    document.getElementById('post-section').innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('post-section').innerHTML += showPosts(post, i);
    }
}


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


function sectionComments(postIndex) {
    return /*html*/`
    <div id="commentAndClose${postIndex}">
        <button class="close-btn" onclick="closeComments(${postIndex})">Schliessen</button>
        <div id="allComments${postIndex}"></div>
    </div>
`;
}


function closeComments(postIndex) {
    let commentSection = document.getElementById(`onlyComments${postIndex}`);
    commentSection.innerHTML = '';
    commentSection.classList.remove('black');
    document.getElementById(`commentsDescription${postIndex}`).classList.remove('d-none');
}


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


function save(postIndex) {
    let saveIcon = posts[postIndex]['saveIcon'];
    if (saveIcon == './img/bookmark-regular.svg') {
        posts[postIndex]['saveIcon'] = './img/bookmark-solid.svg';
    } else {
        posts[postIndex]['saveIcon'] = './img/bookmark-regular.svg';
    }
    show();
}


function showOverlay() {
    document.getElementById('overlay').classList.add('show-overlay');
}


function closeOverlay() {
    document.getElementById('overlay').classList.remove('show-overlay');
}