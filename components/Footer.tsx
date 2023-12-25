// todo: proper markup

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="md:flex justify-between md:w-4/6 mx-auto py-4 max-md:*:py-3">
                    <div className="*:py-1">
                        <h4 className="font-bold">Support</h4>
                        <h5>Help & Contact Us</h5>
                        <h5>Return & Refunds</h5>
                        <h5>Online Stores</h5>
                    </div>
                    <div className="*:py-1">
                        <h4 className="font-bold">Company</h4>
                        <h5>What we do</h5>
                        <h5>Gift Offers</h5>
                        <h5>F.A.Q</h5>
                    </div>
                    <div className="*:py-1">
                        <h4 className="font-bold">Category</h4>
                        <h5>Livingroom</h5>
                        <h5>Bedroom</h5>
                        <h5>Bathroom</h5>
                    </div>
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
