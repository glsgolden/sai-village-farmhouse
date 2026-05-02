import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const amenities = [
    { icon: '🛏', title: '2 Bedrooms', desc: '3 comfortable beds across two spacious bedrooms for restful nights.' },
    { icon: '🚿', title: '3 Bathrooms', desc: 'Clean, modern bathrooms with hot and cold water supply.' },
    { icon: '🏊', title: 'Private Pool', desc: 'Exclusive swimming pool for your group — no sharing with strangers.' },
    { icon: '❄️', title: 'Air Conditioning', desc: 'All rooms are air-conditioned for a comfortable stay year-round.' },
    { icon: '📶', title: 'Free WiFi', desc: 'High-speed WiFi throughout the property to stay connected.' },
    { icon: '🍳', title: 'Modern Kitchen', desc: 'Fully-equipped kitchen if you prefer to cook your own meals.' },
    { icon: '🚗', title: 'Ample Parking', desc: 'Spacious parking area for multiple vehicles.' },
    { icon: '🌿', title: 'Spacious Lawn', desc: 'Lush green lawns perfect for outdoor activities and relaxation.' },
    { icon: '🎪', title: 'Event Space', desc: 'Open area for celebrations, decorations, and gatherings.' },
    { icon: '🔥', title: 'Bonfire Area', desc: 'Dedicated bonfire space for evening get-togethers (seasonal).' },
];

export default function Amenities() {
    return (
        <div>
            <Navbar />
            <div className="page-hero">
                <div className="page-hero-content">
                    <div className="section-label" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
                        <span>Facilities</span>
                    </div>
                    <h1>Our Amenities</h1>
                    <p>Everything you need for a perfect stay, thoughtfully provided</p>
                </div>
            </div>

            <div className="section">
                <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 1rem' }}>
                    <div className="section-label" style={{ justifyContent: 'center' }}>
                        <span>What We Offer</span>
                    </div>
                    <h2 className="section-title">Comfort Meets <em>Nature</em></h2>
                    <p className="section-body" style={{ margin: '0 auto' }}>
                        Every amenity is curated to make your stay relaxing, enjoyable, and memorable.
                    </p>
                </div>
                <div className="amenities-grid">
                    {amenities.map((a, i) => (
                        <div className="amenity-card" key={i}>
                            <span className="amenity-icon">{a.icon}</span>
                            <h4>{a.title}</h4>
                            <p>{a.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}