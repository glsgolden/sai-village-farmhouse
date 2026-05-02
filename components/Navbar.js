import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link href="/" className="navbar-brand">
                Sai Village Farm House
            </Link>
            <div className="navbar-links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/packages">Packages</Link>
                <Link href="/amenities">Amenities</Link>
                <Link href="/events">Events</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/booking" className="btn-nav">Book Now</Link>
            </div>
        </nav>
    );
}