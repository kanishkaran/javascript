const grid = document.getElementById("grid");
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close')
const modalImage = document.getElementById('lightboxContent')


for (let i = 1; i < 10; i++){
    let imagePath = `./images/pic-${i}.jpg`;
    const divElement = document.createElement('div')
    divElement.className = 'thumbnailContainer'

    const imgElement = document.createElement('img')
    imgElement.src = imagePath

    divElement.appendChild(imgElement);
    grid.appendChild(divElement)

    divElement.addEventListener('click', function(){
        modal.classList.add('show');
        modalImage.src = imagePath;
    });
}

closeBtn.addEventListener('click', function(){
    modal.classList.remove('show')
});

