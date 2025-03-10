declare module "*.module.css" {
    const styles: { [className: string]: string }
    export = styles
}
declare module '*.svg' {
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
}
