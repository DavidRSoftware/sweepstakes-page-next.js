export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text container">
                <div className="row">
                    <section className="col d-md-flex flex-wrap mt-5 justify-content-center">
                        <div className="footer-item">Privacy Policy</div>
                        <div className="footer-item">Terms of Use</div>
                        <div className="footer-item">CA Residents Only - Do Not Sell My Info</div>
                        <div className="footer-item">California Privacy</div>
                        <div className="footer-item">Unsubscribe</div>
                    </section>
                </div>
                <div className="row">
                    <section className="col mb-3 mb-md-1 mt-5">
                        <div className="footer-text-small">
                            &copy; 2022 SweepsJunkie.com All Rights Reserved
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    );
}