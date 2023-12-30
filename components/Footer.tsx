import { footerLinks } from "@/lib/utils";

function iterateFooterLinks() {
    return footerLinks.map((link: FooterLink, idx: number): any => {
        return (
            <div key={idx} className="max-md:py-4">
                <h4 className="font-extrabold py-3">{link.title}</h4>
                {link.lines.map((line: string, index: number): any => (
                    <h5 key={index} className="py-2">{line}</h5>
                ))}
            </div>
        )
    })
}

function Footer() {
    return (
        <footer>
            <div className="md:flex justify-between md:w-4/6 mx-auto p-6">
                {iterateFooterLinks()}
            </div>

            <div className="w-full h-px mx-auto bg-slate-950" />

            <div className="flex justify-between items-center p-6">
                <small>Copyright 2023 Perdele</small>
                <div>Logo</div>
                <div>
                    <small>+40-770-123-456</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
