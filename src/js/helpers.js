export function randomDelay(start, end) {
    return Math.random() * (end - start + 1) + start;
}