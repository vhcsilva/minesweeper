export function getFromShadowById<T = HTMLElement >(element: HTMLElement, id: string) {
  return element.shadowRoot?.getElementById(id) as T
}