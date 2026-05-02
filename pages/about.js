import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="page-hero">
                <div className="page-hero-content">
                    <div className="section-label" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
                        <span>Our Story</span>
                    </div>
                    <h1>About Sai Village Farm House</h1>
                    <p>A family retreat born from a love of nature and hospitality</p>
                </div>
            </div>

            <div className="section">
                <div className="about-split">
                    <div>
                        <div className="section-label">
                            <span>Who We Are</span>
                        </div>
                        <h2 className="section-title">More Than a Stay — <em>An Experience</em></h2>
                        <p className="section-body">
                            Sai Village Farm House is a serene retreat nestled in the lush landscape of Badlapur (Mulgaon), Dist. Thane, Maharashtra. Founded with a vision to offer city dwellers a genuine connection with nature, we provide a warm, welcoming environment that feels like a home away from home.
                        </p>
                        <p className="section-body" style={{ marginTop: '1.2rem' }}>
                            Our property features spacious lawns, a private swimming pool, air-conditioned rooms, and a fully-equipped modern kitchen — everything you need for a comfortable and memorable stay. Whether you arrive as a family, a group of friends, or a corporate team, we tailor every visit to create lasting memories.
                        </p>
                        <p className="section-body" style={{ marginTop: '1.2rem' }}>
                            At Sai Village, we believe in warm hospitality, clean surroundings, and genuine care for every guest. Come discover why families return year after year.
                        </p>
                    </div>
                    <div className="about-image-wrap">
                        <img src="/lawn.jpg" alt="Farm House Lawns" className="about-image-main" />
                    </div>
                </div>
            </div>

            <div className="highlights-strip">
                <div className="highlights-inner">
                    <div className="highlight-item">
                        <span className="highlight-icon">🏡</span>
                        <h4>Family Owned</h4>
                        <p>Personal touch in every stay</p>
                    </div>
                    <div className="highlight-item">
                        <span className="highlight-icon">🌳</span>
                        <h4>Nature First</h4>
                        <p>Lush green surroundings</p>
                    </div>
                    <div className="highlight-item">
                        <span className="highlight-icon">⭐</span>
                        <h4>5-Star Hospitality</h4>
                        <p>Genuine care & service</p>
                    </div>
                    <div className="highlight-item">
                        <span className="highlight-icon">🔒</span>
                        <h4>Safe & Private</h4>
                        <p>Exclusive-use property</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}