/**
 * @type {HTMLElement | null}
 */ const fullscreenTarget = document.getElementById('fullscreen-target');
/**
 * @type {HTMLElement | null}
 */ const fullscreenButton = document.getElementById('fullscreen-button');
/**
 * * @returns {void}
 */ function toggleFullScreen() {
    if (!document.fullscreenElement) {
        if (fullscreenTarget && fullscreenTarget.requestFullscreen) fullscreenTarget.requestFullscreen();
    } else if (document.exitFullscreen) document.exitFullscreen();
}
// --- Event Listeners ---
if (fullscreenButton) fullscreenButton.addEventListener('click', toggleFullScreen);
/**
 * * @event fullscreenchange
 */ document.addEventListener('fullscreenchange', ()=>{
    if (fullscreenButton) {
        if (document.fullscreenElement) fullscreenButton.textContent = "Exit Fullscreen";
        else fullscreenButton.textContent = "Enter Fullscreen";
    }
});

//# sourceMappingURL=verkefni10.5e469f4a.js.map
