// Comment Object prototype, to make adding new objects easier
function commentObj(name, avatar, date, comment) {
    this.name = name;
    this.avatar = avatar;
    this.date = date;
    this.comment = comment;
}

//Array for exsisting comments, any additional comments posted will be pushed to the end
commentAry = [
    new commentObj('Theodore Duncan', 'blank.jpg', new Date('11/15/2018'), 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!'),
    new commentObj('Gary Wong', 'blank.jpg', new Date('12/12/2018'), 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'),
    new commentObj('Michael Lyons', 'blank.jpg', new Date('12/18/2018'), 'They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.')
];
/**
 * displayComment builds a new comment block, creates all needed html element, assigns classes
 * and appends them together.
 * @param {*} entry - a comment object
 */
function displayComment(entry) {
    //create comment structure
    var head = document.getElementsByClassName('conversation__post--container')[0];
    var newPost = document.createElement('div');
    var imgBox = document.createElement('div');
    var img = document.createElement('img');
    var textBox = document.createElement('div');
    var header = document.createElement('header');
    var name = document.createElement('h2');
    var date = document.createElement('h5');
    var comment = document.createElement('p');


    //assign classes
    newPost.setAttribute('class', 'conversation__post');
    imgBox.setAttribute('class', 'conversation__image--box');
    img.setAttribute('class', 'conversation__image--posted-comment conversation__image');
    img.setAttribute('src', './assets/images/' + entry.avatar);
    textBox.setAttribute('class', 'conversation__text--box');
    header.setAttribute('class', 'conversation__header');
    name.setAttribute('class', 'conversation__name');
    date.setAttribute('class', 'conversation__date');
    comment.setAttribute('class', 'conversation__comment');

    //add content
    name.innerHTML = entry.name;
    date.innerHTML = dayFormat(entry.date);
    comment.innerHTML = entry.comment;


    //append together
    imgBox.appendChild(img);
    newPost.appendChild(imgBox);

    header.appendChild(name);
    header.appendChild(date);

    textBox.appendChild(header);
    textBox.appendChild(comment);

    newPost.appendChild(textBox);

    head.appendChild(newPost);
}

/**
 * form event listener, gets data from forms, adds new entry to comment array, deletes the 
 * html comments from the page, then rebuilds the entire list of comments.  Finally clears
 * the form fields
 */
const form = document.getElementById('commentForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userName = e.target.commentName.value;
    let userImage = document.getElementsByClassName('conversation__image--create')[0].getAttribute('src');
    let imgStr = userImage.slice(userImage.lastIndexOf('/') + 1, userImage.length);
    let commentText = e.target.commentText.value;
    let postComment = new commentObj(userName, imgStr, new Date(), commentText);
    commentAry.push(postComment);

    flushComments();
    buildComments();
    // clear the name and comment fields
    e.target.commentName.value = '';
    e.target.commentText.value = '';

});


/**
 * Builds the stored comments posted in the comments array
 */
function buildComments() {

    for (let i = 0; i < commentAry.length; i++) {
        displayComment(commentAry[i]);
    }
}
// Builds comments on initial page load
for (let i = 0; i < commentAry.length; i++) {
    displayComment(commentAry[i]);
}


//clears all comments from the page
function flushComments() {
    let postContainer = document.getElementsByClassName('conversation__post--container')[0];
    let list = document.getElementsByClassName('conversation__post--container')[0].childNodes;
    for (let i = list.length - 1; i >= 0; i--) {
        if (list[i].nodeType !== 3) {
            postContainer.removeChild(list[i]);
        }
    }
}