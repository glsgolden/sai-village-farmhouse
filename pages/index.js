import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <header className="hero">
                <div>
                    <h1>Sai Village Farm House</h1>
                    <p>Your Escape. Your Moments.</p>
                    <a href="/booking" className="btn">Book Now</a>
                </div>
            </header>
            <section>
                <h2>Relax. Unwind. Make Memories</h2>
                <p>Located in Badlapur (Mulgaon), District Thane, Sai Village Farm House offers the perfect getaway for families, friends, and corporate groups.</p>
            </section>
            <section>
                <h2>Highlights</h2>
                <div className="card-container">
                    <div className="card">🌿 Spacious Lawn</div>
                    <div className="card">🛏 Comfortable Stay</div>
                    <div className="card">⚡ Modern Amenities</div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
