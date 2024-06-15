declare module "*.css"
declare module "*.svg"
declare module "*.template.html" {
  const content: string;
  export default content;
}