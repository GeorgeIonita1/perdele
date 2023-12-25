import { footerLinks } from "@/lib/utils";

function iterateFooterLinks() {
    return footerLinks.map((link: FooterLink): any => {
        return (
            <div className="max-md:py-4">
                <h4 className="font-extrabold py-3">{link.title}</h4>
                {link.lines.map((line: string): any => (
                    <h5 className="py-2">{line}</h5>
                ))}
            </div>
        )
    })
}

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="md:flex justify-between md:w-4/6 mx-auto py-4">
                    {iterateFooterLinks()}
                </div>

                <div className="w-full h-px mx-auto bg-slate-950" />

                <div className="flex justify-between items-center py-4">
                    <small>Copyright 2023 Perdele</small>
                    <div>Logo</div>
                    <div>
                        <small>+40-770-123-456</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
