import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const events = [
    { icon: '🎂', title: 'Birthday Parties', desc: 'Celebrate your special day surrounded by greenery and your loved ones. We help with décor, food, and activities.' },
    { icon: '🏢', title: 'Corporate Outings', desc: 'Step away from the office for team-building activities, outdoor meetings, and group bonding in a refreshing setting.' },
    { icon: '👨‍👩‍👧‍👦', title: 'Family Gatherings', desc: 'Reunite with family in a spacious, private venue. Perfect for all ages with pool access and open lawns.' },
    { icon: '🎊', title: 'Kitty Parties', desc: 'Host a memorable kitty party with great food, pool fun, and plenty of laughter in a beautiful outdoor setting.' },
    { icon: '💑', title: 'Anniversary Celebrations', desc: 'Mark your milestone in a serene, romantic setting. We can arrange special setups on request.' },
    { icon: '🎓', title: 'Farewell & Get-togethers', desc: 'Say goodbye or hello in style. Our venue accommodates groups of all sizes for any occasion.' },
];

export default function Events() {
    return (
        <div>
            <Navbar />
            <div className="page-hero">
                <div className="page-hero-content">
                    <div className="section-label" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
                        <span>Celebrations</span>
                    </div>
                    <h1>Events at Sai Village</h1>
                    <p>The perfect backdrop for every occasion</p>
                </div>
            </div>

            <div className="section">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
                    <div>
                        <div className="section-label">
                            <span>Venue Highlights</span>
                        </div>
                        <h2 className="section-title">Your <em>Perfect Venue</em> Awaits</h2>
                        <p className="section-body">
                            With a capacity for up to 50 guests, spacious lawns, a private pool, and customisable food packages, Sai Village Farm House is the ideal venue for birthdays, kitty parties, office gatherings, and family functions.
                        </p>
                        <p className="section-body" style={{ marginTop: '1rem' }}>
                            Our team works with you to ensure every detail is perfect. From decorations to menus, we're here to make your event unforgettable.
                        </p>
                        <div style={{ marginTop: '2.5rem' }}>
                            <Link href="/contact" className="btn btn-primary">Enquire About Your Event</Link>
                        </div>
                    </div>
                    <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '4px', padding: '2.5rem' }}>
                        {[['👥', 'Capacity', 'Up to 50 guests'], ['🍽', 'Catering', 'Customisable food packages'], ['🎨', 'Decoration', 'On-request event setup'], ['🌿', 'Setting', 'Private outdoor venue'], ['🚗', 'Parking', 'Ample space for all vehicles']].map(([icon, label, val], i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1rem 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                                <span style={{ fontSize: '1.5rem' }}>{icon}</span>
                                <div>
                                    <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>{label}</div>
                                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: 'var(--forest)' }}>{val}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section-label">
                    <span>Event Types</span>
                </div>
                <h2 className="section-title">We Host <em>Every Occasion</em></h2>
                <div className="events-grid">
                    {events.map((e, i) => (
                        <div className="event-card" key={i}>
                            <div className="event-thumb">{e.icon}</div>
                            <div className="event-content">
                                <h4>{e.title}</h4>
                                <p>{e.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}