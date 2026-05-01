import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <section>
                <h2>Contact Us</h2>
                <p>📍 Sai Village Farm House, Badlapur (Mulgaon), Dist. Thane, Maharashtra</p>
                <p>📞 Harsh Shikhare – <a href="tel:7710934656">7710934656</a><br />
                    📞 Prakash Shelke – <a href="tel:+918879998589">+91 88799 98589</a></p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </section>
            <Footer />
        </div>
    );
}
