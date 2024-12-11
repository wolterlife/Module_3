const imageContainer = document.getElementsByClassName('gallery')[0];
const preview = document.querySelector('.previewInfo');
const lastCard = document.querySelector('.card:last-child');
const coordinatesDiv = document.getElementsByClassName('coordinates')[0];
const prevButton = document.getElementsByClassName('buttonPrev')[0];
const nextButton = document.getElementsByClassName('buttonNext')[0];
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const moveUpBtn = document.getElementsByClassName('moveButton')[0]

const form = document.querySelector('form');
const inputTitle = document.getElementsByClassName("inputTitle")[0];

const resizer = document.querySelector('.resizer');
const leftSide = resizer.previousElementSibling;
const rightSide = resizer.nextElementSibling;

const imagesData = [
    { src: "https://i2.wp.com/miro.medium.com/1*Kt7l5n_SqOz7d11MpqP3Qg.png", text: "Infinity" },
    { src: "https://placehold.jp/0a19eb/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/eb0a0a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/0aebd1/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/eb8d0a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/a40aeb/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/ebe40a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/0eeb0a/ffffff/150x150.png", text: "Card" },
    { src: "https://xprimiendo.com/wp-content/uploads/2018/04/vue-js-thumb-150x150.png", text: "Card" },
    { src: "https://placehold.jp/0a19eb/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/eb0a0a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/0aebd1/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/eb8d0a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/a40aeb/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/ebe40a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/0eeb0a/ffffff/150x150.png", text: "Card" },
    { src: "https://www.taniarascia.com/static/d695fe69198cc4558284e9aec1a4892c/92ab1/react.png", text: "Card" },
    { src: "https://placehold.jp/0a19eb/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/eb0a0a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/0aebd1/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/eb8d0a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/a40aeb/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/ebe40a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/0eeb0a/ffffff/150x150.png", text: "Card" },
    { src: "https://www.taniarascia.com/static/517c02bd875932e2a959488763695b28/92ab1/node.png", text: "Card" },
    { src: "https://placehold.jp/0a19eb/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/eb0a0a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/0aebd1/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/eb8d0a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/a40aeb/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/ebe40a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/0eeb0a/ffffff/150x150.png", text: "Card" },
    { src: "https://coderman.ru/wp-content/uploads/2020/05/maxresdefault-150x150.jpg", text: "Card" },
    { src: "https://placehold.jp/0a19eb/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/eb0a0a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/0aebd1/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/eb8d0a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/a40aeb/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/ebe40a/ffffff/150x150.png", text: "Card" },
    { src: "https://placehold.jp/0eeb0a/ffffff/150x150.png", text: "Card" },
];

let draggedItem = null;
let currentIndex = 0;
let x = 0;
let leftWidth = 0;


function makeDraggable(el) {
    el.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
        e.dataTransfer.setData('text/plain', el.innerHTML);
        e.dataTransfer.effectAllowed = 'move';
    });

    el.addEventListener('dragend', () => {
        draggedItem = null;
        coordinatesDiv.style.visibility = 'hidden'
    });

    el.addEventListener('drag', (event) => {
        if (event.pageX && event.pageY) {
            coordinatesDiv.style.visibility = 'visible'
            coordinatesDiv.textContent = `X: ${event.pageX}, Y: ${event.pageY}`;
        }
    });

    el.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
        preview.innerHTML = ''
        el.classList.add('active');
        updatePreviewZoneAndBtns(card);
    });
}

function allowDrop(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}

function drop(event) {
    event.preventDefault();
    if (draggedItem) {
        document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
        draggedItem.classList.add('active');
        updatePreviewZoneAndBtns(draggedItem);
    }
}


function updatePreviewZoneAndBtns(card, indexActive = null) {
    const cards = document.querySelectorAll('.card');
    const activeCard = document.getElementsByClassName('active')[0]
    const closeBtn = document.getElementsByClassName('closeBtn')[0]

    if (!indexActive) {
        indexActive = Array.from(cards).indexOf(activeCard);
    }
    preview.innerHTML = ''
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    img.src = card.querySelector('img').getAttribute('src');
    img.alt = 'img';
    p.textContent = card.innerText;
    div.className = 'previewInside';
    div.appendChild(img);
    div.appendChild(p);
    preview.appendChild(div);
    nextButton.style.display = 'block';
    prevButton.style.display = 'block';
    closeBtn.style.display = 'block'

    if (indexActive === 0) {
        nextButton.disabled = false;
        prevButton.disabled = true;
        return;
    }

    if (indexActive === cards.length - 1) {
        nextButton.disabled = true;
        prevButton.disabled = false;
        return;
    }

    nextButton.disabled = false;
    prevButton.disabled = false;
}


function movePrev() {
    const cards = document.querySelectorAll('.card');
    const activeCard = document.getElementsByClassName('active')[0]
    const indexActive = Array.from(cards).indexOf(activeCard);
    cards[indexActive].classList.add('active');
    if (indexActive > 0) {
        cards.forEach(card => card.classList.remove('active'));
        cards[indexActive - 1].classList.add('active');
        updatePreviewZoneAndBtns(cards[indexActive - 1], indexActive - 1)
    }
}

function moveNext() {
    const cards = document.querySelectorAll('.card');
    const activeCard = document.getElementsByClassName('active')[0]
    const indexActive = Array.from(cards).indexOf(activeCard);
    cards[indexActive].classList.add('active');
    if (indexActive < cards.length - 1) {
        cards.forEach(card => card.classList.remove('active'));
        cards[indexActive + 1].classList.add('active');
        updatePreviewZoneAndBtns(cards[indexActive + 1], indexActive + 1)
    }
}

function scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}


const mouseDownHandler = function (e) {
    x = e.clientX;
    leftWidth = leftSide.getBoundingClientRect().width;
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    const dx = e.clientX - x;
    const newLeftWidth = ((leftWidth + dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
    if (newLeftWidth > 30 && newLeftWidth < 80) {
        leftSide.style.flexBasis = `${newLeftWidth}%`;
        rightSide.style.flexBasis = `${100 - newLeftWidth}%`;
    }
};

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};


function loadMoreImages() {
    const numberOfCardsToLoad = 5;
    for (let i = 0; i < numberOfCardsToLoad; i++) {
        if (currentIndex >= imagesData.length) {
            return;
        }

        const data = imagesData[currentIndex];
        const article = document.createElement('article');
        const img = document.createElement('img');
        const p = document.createElement('p');
        article.className = 'card';
        article.draggable = true;
        img.src = data.src;
        img.alt = 'img';
        p.textContent = data.text;
        makeDraggable(article);
        article.appendChild(img);
        article.appendChild(p);
        imageContainer.appendChild(article);
        currentIndex++;
    }
}

closeBtn.addEventListener('click', () => {
    preview.innerHTML = ''
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('active'));
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
    closeBtn.style.display = 'none'
})


nextButton.addEventListener('click', () => {
    moveNext();
});

prevButton.addEventListener('click', () => {
    movePrev();
});


resizer.addEventListener('mousedown', mouseDownHandler);

document.addEventListener('keydown', function (event) {
    if (event.code == 'ArrowLeft') {
        movePrev();
    }
    if (event.code == 'ArrowRight') {
        moveNext();
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let file = document.querySelector('input[type=file]').files[0];
    if (file) {
        const article = document.createElement('article');
        const img = document.createElement('img');
        const p = document.createElement('p');
        article.className = 'card';
        article.draggable = true;
        img.src = window.URL.createObjectURL(file);
        img.alt = 'img';
        p.textContent = inputTitle.value;
        makeDraggable(article);
        article.appendChild(img);
        article.appendChild(p);
        imageContainer.insertBefore(article, imageContainer.firstChild);
        document.addImgForm.reset();
    }
});


window.addEventListener('scroll', () => {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if ((scrollPosition + windowHeight) >= documentHeight - 200) {
        moveUpBtn.style.display = 'block';
    } else {
        moveUpBtn.style.display = 'none';
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadMoreImages();
        }
    });
}, { rootMargin: '100px' });

observer.observe(lastCard);

imageContainer.addEventListener('DOMNodeInserted', () => {
    const newLastCard = document.querySelector('.card:last-child');
    observer.unobserve(lastCard);
    observer.observe(newLastCard);
});

document.querySelectorAll('.card').forEach(card => makeDraggable(card));
