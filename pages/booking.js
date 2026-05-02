import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Booking() {
    return (
        <div>
            <Navbar />
            <div className="page-hero">
                <div className="page-hero-content">
                    <div className="section-label" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
                        <span>Reservations</span>
                    </div>
                    <h1>Book Your Stay</h1>
                    <p>Fill in the details below and we'll confirm your reservation</p>
                </div>
            </div>

            <div className="section">
                <div className="booking-wrap">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '1.5rem', borderRadius: '4px', textAlign: 'center' }}>
                            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.9rem', color: 'var(--gold)', marginBottom: '0.25rem' }}>Weekdays (Mon–Thu)</div>
                            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>₹1,500/pp with food · ₹1,000/pp without</div>
                        </div>
                        <div style={{ background: 'var(--gold)', padding: '1.5rem', borderRadius: '4px', textAlign: 'center' }}>
                            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.9rem', color: 'var(--forest)', marginBottom: '0.25rem' }}>Weekends (Fri–Sun)</div>
                            <div style={{ fontSize: '0.82rem', color: 'rgba(26,58,26,0.65)' }}>₹1,800/pp with food · ₹1,000/pp without</div>
                        </div>
                    </div>

                    <div className="form-card">
                        <div className="section-label" style={{ marginBottom: '1.5rem' }}>
                            <span>Booking Form</span>
                        </div>
                        <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
                            Reserve Your <em>Dates</em>
                        </h2>

                        <form className="form-grid">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" name="name" placeholder="Full name" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" />
                            </div>
                            <div className="form-group">
                                <label>Check-in Date</label>
                                <input type="date" name="checkin" />
                            </div>
                            <div className="form-group">
                                <label>Check-out Date</label>
                                <input type="date" name="checkout" />
                            </div>
                            <div className="form-group">
                                <label>Number of Guests</label>
                                <input type="number" name="guests" min="1" placeholder="e.g. 6" />
                            </div>
                            <div className="form-group">
                                <label>Food Package</label>
                                <select name="food">
                                    <option value="with">With Food</option>
                                    <option value="without">Without Food</option>
                                </select>
                            </div>
                            <div className="form-group full">
                                <label>Special Requests</label>
                                <textarea name="requests" placeholder="Decorations, dietary preferences, event type, or any other requirements..." />
                            </div>
                            <div className="form-submit full">
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '0.85rem' }}>
                                    Submit Booking Request
                                </button>
                                <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                    We'll contact you within 24 hours to confirm your booking. For urgent enquiries, call us directly.
                                </p>
                            </div>
                        </form>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                        <a href="tel:7710934656" style={{ flex: 1, minWidth: '200px', display: 'block', background: 'var(--forest)', color: 'var(--gold)', padding: '1rem', borderRadius: '4px', textAlign: 'center', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600' }}>
                            📞 Call Harsh — 77109 34656
                        </a>
                        <a href="tel:+918879998589" style={{ flex: 1, minWidth: '200px', display: 'block', background: 'var(--forest)', color: 'var(--gold)', padding: '1rem', borderRadius: '4px', textAlign: 'center', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600' }}>
                            📞 Call Prakash — +91 88799 98589
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}