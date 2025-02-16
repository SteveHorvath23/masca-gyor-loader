function isAppInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
}

function isMobileDevice() {
    return /Android|iPhone|iPad/i.test(navigator.userAgent);
}

function updateLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const noInternetMessage = document.getElementById('noInternetMessage');

    if (!navigator.onLine) {
        noInternetMessage.style.display = 'block';
        loadingScreen.style.display = 'flex';
    } else {
        loadingScreen.style.display = 'flex';
        setTimeout(() => loadingScreen.style.display = 'none', 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (isMobileDevice() && isAppInstalled()) {
        window.addEventListener('load', updateLoadingScreen);
        window.addEventListener('offline', updateLoadingScreen);
        window.addEventListener('online', updateLoadingScreen);
        updateLoadingScreen();
    }
});
