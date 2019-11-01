export function fetchFeatures() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['1','2','3']);
        }, 2000);
    })
}