import Image from "next/image";
import ContactForm from "./ContactForm";

function ContactDisplay() {


    return (
        <div className='grid grid-cols-2'>
            <div>
                <Image alt="map" src="/map.png" width={800} height={600} />
            </div>
            <div className="p-12">
                <h2>Get in touch</h2>
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactDisplay;
