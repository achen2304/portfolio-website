export const getImageUrl1 = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}