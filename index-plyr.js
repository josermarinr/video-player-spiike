const followBtn = document.querySelector('.btn')

followBtn.addEventListener('click', ()=> {
    followBtn.classList.toggle('follow')
    followBtn.classList.toggle('unfollow')
    setTimeout(()=>{
        followBtn.style.backgroundSize = '50px'

    }, 800)
    followBtn.style.backgroundSize = '20px'
})


const player = new Plyr('#player', {
    controls: [ 
        'play-large', 
        'play', 
        'volume', 
        'progress', 
        'current-time', 
        'pip', 
        'airplay', 
        'fullscreen'
    ],

})


