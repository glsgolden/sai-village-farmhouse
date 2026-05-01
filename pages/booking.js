import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Booking() {
    return (
        <div>
            <Navbar />
            <section>
                <h2>Booking Form</h2>
                <form className="card">
                    <label>Check-in Date: <input type="date" name="checkin" /></label><br />
                    <label>Check-out Date: <input type="date" name="checkout" /></label><br />
                    <label>Guests: <input type="number" name="guests" min="1" /></label><br />
                    <label>Food Package:
                        <select name="food">
                            <option value="with">With Food</option>
                            <option value="without">Without Food</option>
                        </select>
                    </label><br />
                    <label>Special Requests:<br />
                        <textarea name="requests"></textarea>
                    </label><br />
                    <button type="submit" className="btn">Submit</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}
