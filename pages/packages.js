import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Packages() {
    return (
        <div>
            <Navbar />
            <div className="page-hero">
                <div className="page-hero-content">
                    <div className="section-label" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
                        <span>Pricing</span>
                    </div>
                    <h1>Packages & Pricing</h1>
                    <p>Transparent rates with no hidden charges</p>
                </div>
            </div>

            <div className="section-full packages-bg">
                <div className="section" style={{ padding: '5rem 2rem' }}>
                    <div className="packages-header">
                        <div className="section-label" style={{ justifyContent: 'center' }}>
                            <span>Stay Options</span>
                        </div>
                        <h2 className="section-title">Choose Your <em>Perfect Package</em></h2>
                        <p className="section-body">
                            All packages include exclusive access to the full property — private pool, lawns, parking, and all listed amenities.
                        </p>
                    </div>
                    <div className="packages-grid">
                        <div className="package-card">
                            <span className="package-badge">Mon – Thu</span>
                            <h3>Weekday Retreat</h3>
                            <p className="package-subtitle">Perfect for mid-week escapes & small families</p>
                            <div className="price-row">
                                <span className="price-label">With Food</span>
                                <span className="price-amount">₹1,500</span>
                                <span className="price-per">/ person</span>
                            </div>
                            <div className="price-row">
                                <span className="price-label">Without Food</span>
                                <span className="price-amount">₹1,000</span>
                                <span className="price-per">/ person</span>
                            </div>
                            <div className="package-divider" />
                            <ul className="package-features">
                                <li>Full property exclusive use</li>
                                <li>Private swimming pool</li>
                                <li>2 bedrooms, 3 beds, 3 baths</li>
                                <li>Air conditioned rooms</li>
                                <li>Free WiFi & modern kitchen</li>
                                <li>Ample parking</li>
                            </ul>
                            <Link href="/booking" className="package-cta">Reserve Now</Link>
                        </div>

                        <div className="package-card featured">
                            <span className="package-badge">Most Popular</span>
                            <h3>Weekend Getaway</h3>
                            <p className="package-subtitle">Fri – Sun · The ultimate weekend escape</p>
                            <div className="price-row">
                                <span className="price-label">With Food</span>
                                <span className="price-amount">₹1,800</span>
                                <span className="price-per">/ person</span>
                            </div>
                            <div className="price-row">
                                <span className="price-label">Without Food</span>
                                <span className="price-amount">₹1,000</span>
                                <span className="price-per">/ person</span>
                            </div>
                            <div className="package-divider" />
                            <ul className="package-features">
                                <li>Everything in weekday</li>
                                <li>Bonfire setup (seasonal)</li>
                                <li>Priority booking slots</li>
                                <li>Option for event décor</li>
                                <li>Outdoor games setup</li>
                                <li>Dedicated host support</li>
                            </ul>
                            <Link href="/booking" className="package-cta">Reserve Now</Link>
                        </div>

                        <div className="package-card">
                            <span className="package-badge">10+ Guests</span>
                            <h3>Group & Corporate</h3>
                            <p className="package-subtitle">Custom packages for large gatherings</p>
                            <div className="price-row">
                                <span className="price-label">Rate</span>
                                <span className="price-amount">Custom</span>
                            </div>
                            <div style={{ height: '1.2rem' }} />
                            <div className="package-divider" />
                            <ul className="package-features">
                                <li>Capacity up to 50 guests</li>
                                <li>Customisable food menu</li>
                                <li>Bulk booking discounts</li>
                                <li>Event coordination support</li>
                                <li>Special activities on request</li>
                                <li>Flexible check-in timings</li>
                            </ul>
                            <Link href="/contact" className="package-cta">Get a Quote</Link>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>
                        * Prices are per person. Minimum booking may apply. Contact us to confirm availability.
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}