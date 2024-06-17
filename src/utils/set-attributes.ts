export function setAttributes(element: HTMLElement, props: Record<string, string>) {
  Object
    .entries(props)
    .forEach(([prop, value]) => element.setAttribute(prop, value))
}