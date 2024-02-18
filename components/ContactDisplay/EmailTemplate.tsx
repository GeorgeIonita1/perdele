interface EmailTemplateProps {
    name: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name
}) => (
    <div>
        <h1>Hello, {name}</h1>
        <p>Thank you for your message! We will reach out to you soon!</p>
    </div>
);

export default EmailTemplate;
