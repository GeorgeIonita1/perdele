import ContactForm from "./ContactForm";
import { MapPin, Phone, Send } from "lucide-react";

function ContactDisplay() {
    return (
        <div className='md:grid md:grid-cols-2 *:p-12'>
            <div className="md:order-1">
                <h2>Get in touch</h2>
                <ContactForm />
            </div>
            <div className="bg-stone-700 text-white	">
                <h2>Contact us</h2>
                <p>We're open to any suggestions or just have a chat</p>

                <div>
                    <ul className="*:flex *:gap-6 *:py-6 pt-12 pl-6">
                        <li>
                            <MapPin />
                            <p><strong>Address:</strong> Strada 1234, numarul 56, sector 7, Bucuresti</p>
                        </li>
                        <li>
                            <a href="tel:+40770123456" className="flex gap-6">
                                <Phone />
                                <p><strong>Phone:</strong> 0771-234-567</p>
                            </a>
                        </li>
                        <li>
                            {/* <a href="mailto:email@contact.com"> */}
                            <Send />
                            <p><strong>Email:</strong> email@contect.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactDisplay;
