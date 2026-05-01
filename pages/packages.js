import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Packages() {
    return (
        <div>
            <Navbar />
            <section>
                <h2>Packages & Pricing</h2>
                <div className="card-container">
                    <div className="card">
                        <h3>Weekend Offer (Fri–Sun)</h3>
                        <p>With Food ₹1800 per person<br />Without Food ₹1000 per person</p>
                    </div>
                    <div className="card">
                        <h3>Weekdays (Mon–Thu)</h3>
                        <p>With Food ₹1500 per person<br />Without Food ₹1000 per person</p>
                    </div>
                    <div className="card">
                        <h3>Large Groups</h3>
                        <p>Special rates for 10+ people<br />Custom packages available<br />Ideal for corporate & family events</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
