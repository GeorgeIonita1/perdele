import { footerLinks } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

function iterateFooterLinks() {
    return footerLinks.map((link: FooterLink, idx: number): any => {
        return (
            <div key={idx} className="max-md:py-4">
                <h4 className="font-extrabold py-3 text-xl">{link.title}</h4>
                {link.lines.map((line: string, index: number): any => (
                    <Link
                        key={index} className="py-0 block"
                        href='/detail/2'
                    >
                        <Button variant='link' className="text-white p-0"><h5>{line}</h5></Button>
                    </Link>
                ))}
            </div>
        )
    })
}

function Footer() {
    return (
        <footer className="bg-black text-white mt-16">
            <div className="container md:flex justify-between py-16 px-8">
                {iterateFooterLinks()}
            </div>

            <div className="w-full h-px mx-auto bg-white" />

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
