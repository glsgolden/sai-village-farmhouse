import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/packages">Packages</Link>
            <Link href="/amenities">Amenities</Link>
            <Link href="/events">Events</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/booking">Booking</Link>
        </nav>
    );
}
