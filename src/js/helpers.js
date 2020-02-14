export function emulateLoadingDelay(f) {
    setTimeout(() => {
        f.call();
    }, 1000);
}