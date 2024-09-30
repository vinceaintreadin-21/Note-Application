document.getElementById('click-me').addEventListener('click', function() {
    document.getElementById('initial-page').classList.add('hidden');
    var messagePage = document.getElementById('message-page');
    messagePage.classList.remove('hidden');

    var message = messagePage.querySelector('.message');
    message.classList.add('visible');

    var backgroundAudio = document.getElementById('background-audio');
    backgroundAudio.volume = 0.5; 
    backgroundAudio.play();

    var soundEffect = document.getElementById('sound-effect');
    soundEffect.volume = 0.5; 
    soundEffect.play();

    
    document.body.classList.add('body-colored');
});
