import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const images = [
    { src: '/pool.jpg', alt: 'Swimming Pool', bg: '#4a7c45' },
    { src: '/lawn.jpg', alt: 'Lush Lawn', bg: '#2d5a27' },
    { src: '/rooms.jpg', alt: 'Bedroom', bg: '#7a5c3a' },
    { src: '/hero.jpg', alt: 'Farm House Exterior', bg: '#1a3a1a' },
    { src: '/pool.jpg', alt: 'Evening Ambience', bg: '#c8a96e' },
    { src: '/lawn.jpg', alt: 'Outdoor Dining', bg: '#4a7c45' },
    { src: '/rooms.jpg', alt: 'Common Area', bg: '#2d5a27' },
    { src: '/hero.jpg', alt: 'Sunrise View', bg: '#7a5c3a' },
];

export default function Gallery() {
    return (
        <div>
            <Navbar />
            <div className="page-hero">
                <div className="page-hero-content">
                    <div className="section-label" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
                        <span>Visual Tour</span>
                    </div>
                    <h1>Gallery</h1>
                    <p>A glimpse into life at Sai Village Farm House</p>
                </div>
            </div>

            <div className="section">
                <div className="gallery-mosaic" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="gallery-item"
                            style={i === 0 ? { gridColumn: 'span 2', gridRow: 'span 2' } : {}}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    minHeight: i === 0 ? '460px' : '220px',
                                    objectFit: 'cover',
                                    display: 'block',
                                    background: img.bg,
                                    transition: 'transform 0.5s ease'
                                }}
                            />
                        </div>
                    ))}
                </div>

                <p style={{ textAlign: 'center', marginTop: '2.5rem', color: 'var(--text-muted)', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}>
                    Want to see more? Visit us in person — the real thing is even better.
                </p>
            </div>

            <Footer />
        </div>
    );
}