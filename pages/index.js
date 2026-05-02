import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Navbar />

            {/* HERO */}
            <header className="hero">
                <div className="hero-bg" />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <span className="hero-eyebrow">Welcome to Badlapur · Maharashtra</span>
                    <h1>Your <em>Escape</em> into Nature</h1>
                    <p>Sai Village Farm House — where every visit becomes a cherished memory.</p>
                    <div className="hero-cta">
                        <Link href="/booking" className="btn btn-primary">Book Your Stay</Link>
                        <Link href="/packages" className="btn btn-outline">View Packages</Link>
                    </div>
                </div>
                <div className="hero-scroll">
                    <div className="scroll-line" />
                    <span>Scroll</span>
                </div>
            </header>

            {/* HIGHLIGHTS STRIP */}
            <div className="highlights-strip">
                <div className="highlights-inner">
                    <div className="highlight-item">
                        <span className="highlight-icon">🌊</span>
                        <h4>Private Pool</h4>
                        <p>Exclusive use</p>
                    </div>
                    <div className="highlight-item">
                        <span className="highlight-icon">🛏</span>
                        <h4>2 Bedrooms</h4>
                        <p>3 beds, 3 baths</p>
                    </div>
                    <div className="highlight-item">
                        <span className="highlight-icon">🌿</span>
                        <h4>Lush Lawns</h4>
                        <p>Spacious grounds</p>
                    </div>
                    <div className="highlight-item">
                        <span className="highlight-icon">🍽</span>
                        <h4>Food Options</h4>
                        <p>With or without meals</p>
                    </div>
                    <div className="highlight-item">
                        <span className="highlight-icon">🎉</span>
                        <h4>Events</h4>
                        <p>Up to 50 guests</p>
                    </div>
                    <div className="highlight-item">
                        <span className="highlight-icon">📍</span>
                        <h4>Near Mumbai</h4>
                        <p>Easy drive from city</p>
                    </div>
                </div>
            </div>

            {/* ABOUT PREVIEW */}
            <div className="section" style={{ paddingBottom: '7rem' }}>
                <div className="about-split">
                    <div className="about-image-wrap">
                        <img src="/pool.jpg" alt="Farm House" className="about-image-main" />
                        <img src="/lawn.jpg" alt="Lawn" className="about-image-accent" />
                        <div className="about-badge">
                            <strong>Est.</strong>
                            <span>Family Retreat</span>
                        </div>
                    </div>
                    <div>
                        <div className="section-label">
                            <span>About Us</span>
                        </div>
                        <h2 className="section-title">
                            A Peaceful Retreat <em>Close to Home</em>
                        </h2>
                        <p className="section-body">
                            Sai Village Farm House is a serene escape nestled in Badlapur (Mulgaon), District Thane. Set amidst lush greenery with a private swimming pool, spacious lawns, and modern comforts, it's the perfect destination for families, friends, and corporate groups seeking to reconnect with nature.
                        </p>
                        <p className="section-body" style={{ marginTop: '1rem' }}>
                            Whether you're planning a weekend getaway, a birthday celebration, or a team outing — we create experiences that stay with you long after you return home.
                        </p>
                        <div style={{ marginTop: '2.5rem' }}>
                            <Link href="/about" className="btn btn-primary">Discover Our Story</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* PACKAGES PREVIEW */}
            <div className="section-full packages-bg">
                <div className="section" style={{ padding: '5rem 2rem' }}>
                    <div className="packages-header">
                        <div className="section-label">
                            <span>Stay Packages</span>
                        </div>
                        <h2 className="section-title">Choose Your <em>Experience</em></h2>
                        <p className="section-body">
                            Flexible packages designed for every group size and budget. All stays include access to our private pool and lush grounds.
                        </p>
                    </div>
                    <div className="packages-grid">
                        <div className="package-card">
                            <span className="package-badge">Mon – Thu</span>
                            <h3>Weekday Retreat</h3>
                            <p className="package-subtitle">Perfect for mid-week escapes</p>
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
                                <li>Private pool access</li>
                                <li>Spacious lawn</li>
                                <li>2 bedrooms, 3 beds</li>
                                <li>AC rooms & free WiFi</li>
                            </ul>
                            <Link href="/booking" className="package-cta">Reserve Now</Link>
                        </div>

                        <div className="package-card featured">
                            <span className="package-badge">Fri – Sun</span>
                            <h3>Weekend Getaway</h3>
                            <p className="package-subtitle">Most popular choice</p>
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
                                <li>Weekend bonfire setup</li>
                                <li>Priority booking</li>
                                <li>Event decoration option</li>
                            </ul>
                            <Link href="/booking" className="package-cta">Reserve Now</Link>
                        </div>

                        <div className="package-card">
                            <span className="package-badge">10+ Guests</span>
                            <h3>Group & Corporate</h3>
                            <p className="package-subtitle">Custom packages for large groups</p>
                            <div className="price-row">
                                <span className="price-label">Starting</span>
                                <span className="price-amount">Custom</span>
                            </div>
                            <div style={{ height: '1.2rem' }} />
                            <div className="package-divider" />
                            <ul className="package-features">
                                <li>Up to 50 guests</li>
                                <li>Customisable food menu</li>
                                <li>Dedicated coordinator</li>
                                <li>Ample parking</li>
                            </ul>
                            <Link href="/contact" className="package-cta">Get a Quote</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* GALLERY PREVIEW */}
            <div className="section">
                <div className="section-label">
                    <span>Gallery</span>
                </div>
                <h2 className="section-title">A Glimpse of <em>Your Getaway</em></h2>
                <div className="gallery-mosaic">
                    <div className="gallery-item">
                        <img src="/pool.jpg" alt="Swimming Pool" className="gallery-img-placeholder" style={{ minHeight: '460px', background: '#4a7c45' }} />
                    </div>
                    <div className="gallery-item">
                        <img src="/lawn.jpg" alt="Lawn" className="gallery-img-placeholder" style={{ background: '#2d5a27' }} />
                    </div>
                    <div className="gallery-item">
                        <img src="/rooms.jpg" alt="Rooms" className="gallery-img-placeholder" style={{ background: '#7a5c3a' }} />
                    </div>
                    <div className="gallery-item">
                        <img src="/hero.jpg" alt="Farm House" className="gallery-img-placeholder" style={{ background: '#1a3a1a' }} />
                    </div>
                    <div className="gallery-item">
                        <img src="/pool.jpg" alt="Evenings" className="gallery-img-placeholder" style={{ background: '#c8a96e' }} />
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link href="/gallery" className="btn btn-primary">View Full Gallery</Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}