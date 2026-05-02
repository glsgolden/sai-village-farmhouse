import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <h3>Sai Village Farm House</h3>
                    <p>A serene agro retreat nestled in Badlapur, offering families and groups the perfect escape from city life.</p>
                </div>
                <div className="footer-col">
                    <h4>Explore</h4>
                    <Link href="/about">About Us</Link>
                    <Link href="/packages">Packages & Pricing</Link>
                    <Link href="/amenities">Amenities</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/gallery">Gallery</Link>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <a href="tel:7710934656">Harsh – 77109 34656</a>
                    <a href="tel:+918879998589">Prakash – +91 88799 98589</a>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                        Badlapur (Mulgaon), Dist. Thane, Maharashtra
                    </a>
                    <Link href="/booking">Book a Stay →</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2026 Sai Village Farm House · Badlapur (Mulgaon), Dist. Thane, Maharashtra · All rights reserved.</p>
            </div>
        </footer>
    );
}