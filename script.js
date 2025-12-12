// Lyrics data with timestamps
const lyrics = [
    { lyric: "Hindi na makalaya", time: 0 },
    { lyric: "Dinadalaw mo 'ko bawat gabi", time: 4 },
    { lyric: "Wala mang nakikita", time: 9 },
    { lyric: "Haplos mo'y ramdam pa rin sa dilim", time: 13 },
    { lyric: "Hindi na nananaginip", time: 18 },
    { lyric: "Hindi na ma-makagising", time: 22 },
    { lyric: "Pasindi na ng ilaw", time: 26 },
    { lyric: "Minumulto na 'ko ng damdamin ko", time: 31 },
    { lyric: "Ng damdamin ko", time: 36 },
    { lyric: "Hindi mo ba ako lilisanin?", time: 38 },
    { lyric: "Hindi pa ba sapat pagpapahirap sa 'kin? (Damdamin ko...)", time: 41 },
    { lyric: "Hindi na ba ma-mamamayapa?", time: 47 },
    { lyric: "Hindi na ba ma-mamamayapa?", time: 51 },
    { lyric: "Hindi na makalaya", time: 55 }
];

// DOM Elements
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPause');
const currentLyricEl = document.getElementById('currentLyric');
const nextLyricEl = document.getElementById('nextLyric');
const lyricsContainer = document.querySelector('.lyrics-container');

let currentLyricIndex = 0;
let isPlaying = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Lyrics player initialized');
    
    // Set initial volume
    audio.volume = 0.7;
    
    // Update lyrics as audio plays
    audio.addEventListener('timeupdate', function() {
        const currentTime = audio.currentTime;
        console.log('Current time:', currentTime); // Debug log
        updateLyrics(currentTime);
    });
    
    // Reset when audio ends
    audio.addEventListener('ended', function() {
        isPlaying = false;
        playPauseBtn.querySelector('.material-symbols-outlined').textContent = 'play_arrow';
        currentLyricIndex = 0;
        updateLyricDisplay();
    });

    // Handle audio loading errors
    audio.addEventListener('error', function(e) {
        console.error('Audio loading error:', e);
        alert('Error loading audio file. Please check if the audio file exists in ./assets/multo.mp3');
    });

    // Initialize first lyric
    updateLyricDisplay();
});

// Play/Pause functionality
playPauseBtn.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.querySelector('.material-symbols-outlined').textContent = 'play_arrow';
        console.log('Audio paused');
    } else {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                playPauseBtn.querySelector('.material-symbols-outlined').textContent = 'pause';
                console.log('Audio playing');
            }).catch(error => {
                console.error('Error playing audio:', error);
                alert('Error playing audio. Please check if the audio file exists and is accessible.');
            });
        }
    }
    isPlaying = !isPlaying;
});

// Update lyrics based on current time
function updateLyrics(currentTime) {
    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time && (i === lyrics.length - 1 || currentTime < lyrics[i + 1].time)) {
            if (currentLyricIndex !== i) {
                console.log('Changing lyric to index:', i, 'Lyric:', lyrics[i].lyric); // Debug log
                currentLyricIndex = i;
                animateLyricChange();
            }
            break;
        }
    }
}

// Animate lyric change
function animateLyricChange() {
    lyricsContainer.classList.add('fade-out');
    
    setTimeout(() => {
        updateLyricDisplay();
        lyricsContainer.classList.remove('fade-out');
        lyricsContainer.classList.add('fade-in');
        
        setTimeout(() => {
            lyricsContainer.classList.remove('fade-in');
        }, 500);
    }, 250);
}

// Update lyric display
function updateLyricDisplay() {
    if (currentLyricEl && lyrics[currentLyricIndex]) {
        currentLyricEl.textContent = lyrics[currentLyricIndex].lyric;
        console.log('Updated current lyric:', lyrics[currentLyricIndex].lyric); // Debug log
    }
    
    if (nextLyricEl) {
        if (currentLyricIndex < lyrics.length - 1) {
            nextLyricEl.textContent = lyrics[currentLyricIndex + 1].lyric;
            nextLyricEl.style.display = 'block';
            console.log('Updated next lyric:', lyrics[currentLyricIndex + 1].lyric); // Debug log
        } else {
            nextLyricEl.style.display = 'none';
        }
    }
}

// Add keyboard controls for testing
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case ' ': // Spacebar
            e.preventDefault();
            playPauseBtn.click();
            break;
        case 'ArrowLeft':
            if (audio.currentTime > 5) {
                audio.currentTime -= 5;
            } else {
                audio.currentTime = 0;
            }
            break;
        case 'ArrowRight':
            audio.currentTime += 5;
            break;
    }
});