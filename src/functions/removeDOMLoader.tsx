/**
 * Remove DOM loader
 * @description Removes DOM loader icon.
 * To use when App initializes.
 */
export default function removeDOMLoader(): void {
    const iconDOMLoader = document.getElementById('icon-loader')
    if (iconDOMLoader) iconDOMLoader.remove()
}