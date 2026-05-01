import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Amenities() {
    return (
        <div>
            <Navbar />
            <section>
                <h2>Amenities</h2>
                <div className="card-container">
                    <div className="card">2 Bedrooms, 3 Beds, 3 Bathrooms</div>
                    <div className="card">Private Swimming Pool</div>
                    <div className="card">Free WiFi & Modern Kitchen</div>
                    <div className="card">Air Conditioned Rooms</div>
                    <div className="card">Ample Parking</div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
