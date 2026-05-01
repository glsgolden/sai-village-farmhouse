import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Gallery() {
    return (
        <div>
            <Navbar />
            <section>
                <h2>Gallery</h2>
                <div className="card-container">
                    <img src="/pool.jpg" alt="Swimming Pool" className="card" />
                    <img src="/lawn.jpg" alt="Lawn" className="card" />
                    <img src="/rooms.jpg" alt="Rooms" className="card" />
                </div>
            </section>
            <Footer />
        </div>
    );
}
