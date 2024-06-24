export function setAttributes(element: Element, props: Record<string, string>) {
  Object
    .entries(props)
    .forEach(([prop, value]) => element.setAttribute(prop, value))
}