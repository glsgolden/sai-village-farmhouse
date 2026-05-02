import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div className="page-hero">
                <div className="page-hero-content">
                    <div className="section-label" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
                        <span>Get in Touch</span>
                    </div>
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you — reach out to plan your stay</p>
                </div>
            </div>

            <div className="section">
                <div className="contact-layout">
                    <div>
                        <div className="section-label">
                            <span>Reach Us</span>
                        </div>
                        <h2 className="section-title">We're Here to <em>Help</em></h2>
                        <p className="section-body" style={{ marginBottom: '2.5rem' }}>
                            Have questions about availability, pricing, or events? Call us directly or drop by — we're always happy to show you around.
                        </p>

                        <div className="contact-info-item">
                            <div className="contact-icon-wrap">📍</div>
                            <div>
                                <h4>Our Location</h4>
                                <p>Sai Village Farm House, Badlapur (Mulgaon)<br />Dist. Thane, Maharashtra</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon-wrap">📞</div>
                            <div>
                                <h4>Call Us</h4>
                                <a href="tel:7710934656">Harsh Shikhare — 77109 34656</a><br />
                                <a href="tel:+918879998589">Prakash Shelke — +91 88799 98589</a>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon-wrap">🕐</div>
                            <div>
                                <h4>Best Time to Call</h4>
                                <p>Daily, 9:00 AM – 8:00 PM</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon-wrap">🚗</div>
                            <div>
                                <h4>Getting Here</h4>
                                <p>Approx. 60 km from Mumbai. Easily accessible by road via Badlapur station.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d73.26!3d19.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA5JzAwLjAiTiA3M8KwMTUnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Sai Village Farm House Location"
                            />
                        </div>
                        <div style={{ background: 'var(--forest)', padding: '1.5rem 2rem', borderRadius: '0 0 4px 4px' }}>
                            <p style={{ color: 'var(--gold)', fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', margin: 0 }}>
                                📍 Sai Village Farm House, Badlapur (Mulgaon), Dist. Thane
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}