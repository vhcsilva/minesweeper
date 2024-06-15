export function loadCSS(element: HTMLElement, styles: string) {
  const css = element.ownerDocument.createElement('style')
  css.innerHTML = styles
  element.shadowRoot?.appendChild(css)
}