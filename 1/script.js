const colors = [
    'rgb(21, 226, 226)',
    'rgb(100, 226, 21)',
    'rgb(91, 80, 220)',
    'rgb(220, 80, 145)',
    'rgb(72, 6, 6)',
    'rgb(190, 154, 234)',
    'rgb(14, 156, 45)',
    'rgb(228, 12, 12)',
    'rgb(207, 192, 208)'
];

const images = [
    'https://cdn.pixabay.com/photo/2022/03/03/13/00/heart-7045303_960_720.jpg',

    'https://cdn.pixabay.com/photo/2017/02/20/19/59/sunset-2083771_960_720.jpg',
  
    'https://cdn.pixabay.com/photo/2018/08/13/21/52/nature-3604097_960_720.jpg',

    'https://cdn.pixabay.com/photo/2016/08/23/20/27/brilliantine-1615469_960_720.jpg',

    'https://cdn.pixabay.com/photo/2018/02/28/18/53/sunset-3188764_960_720.jpg',

    'https://cdn.pixabay.com/photo/2017/01/16/11/05/sunrise-1983740_960_720.jpg',

    'https://cdn.pixabay.com/photo/2018/08/24/20/43/meadow-3628843_960_720.jpg',

    'https://cdn.pixabay.com/photo/2017/07/17/21/41/nature-2513985_960_720.jpg',

    'https://cdn.pixabay.com/photo/2022/03/04/18/01/ukraine-7047830_960_720.jpg'
];

const color = document.querySelector('.color');

function showColors(e){
    document.querySelector('.container').classList.add('active');
    for (let i=0; i<9; i++){
        document.querySelectorAll('.box')[i].style.backgroundImage = 'none';
    }
    for (let i=0; i<9; i++){
        document.querySelectorAll('.box')[i].style.backgroundColor = colors[i];
    }
}

color.addEventListener('click', showColors);


const image = document.querySelector('.image');

function showImages(e){
    document.querySelector('.container').classList.add('active');
    for (let i=0; i<9; i++){
        document.querySelectorAll('.box')[i].style.backgroundColor = 'rgba(0,0,0,0)';
    }
    for (let i=0; i<9; i++){
        document.querySelectorAll('.box')[i].style.backgroundImage = 'url('+images[i]+')';
    }
}

image.addEventListener('click', showImages);

for (let i=0; i<9; i++){
    document.querySelectorAll('.box')[i].onclick = function(){
        let bg = getComputedStyle(this);
        document.querySelector('body').style.backgroundImage = bg.backgroundImage;
        if(document.querySelector('body').style.backgroundImage == 'none'){
            document.querySelector('body').style.backgroundColor = bg.backgroundColor;
        } else {
            document.querySelector('body').style.backgroundColor = 'rgba(0,0,0,0)';
        }
    }
}
