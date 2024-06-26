interface EmailTemplateProps {
    name: string;
    phone: string;
    email: string;
    message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name, phone, email, message
}) => (
    <div>
        <h1>New contact</h1>
        <h2>Name: {name}</h2>
        <h2>Phone: {phone}</h2>
        <h2>Email: {email}</h2>
        <h3>{message}</h3>
    </div>
);

export default EmailTemplate;
