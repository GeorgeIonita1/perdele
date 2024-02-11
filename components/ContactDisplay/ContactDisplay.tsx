import Image from "next/image";
import ContactForm from "./ContactForm";

function ContactDisplay() {
    return (
        <div className='md:grid md:grid-cols-2'>
            <div className="p-12 md:order-1">
                <h2>Get in touch</h2>
                <ContactForm />
            </div>
            <div>
                <Image alt="map" src="/map.png" width={800} height={600} />
            </div>
        </div>
    );
}

export default ContactDisplay;
