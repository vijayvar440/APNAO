
import {
  MapPin, Search, Bell, ChevronDown,
  Zap, Droplets, Hammer, Sparkles,
  Snowflake, Bike, ArrowRight, Star,
  Home, ClipboardList, MessageCircle, User
} from "lucide-react";

import "./App.css";

const services = [
  { name: "Electrician", icon: Zap, color: "yellow" },
  { name: "Plumber", icon: Droplets, color: "blue" },
  { name: "Carpenter", icon: Hammer, color: "orange" },
  { name: "Cleaning", icon: Sparkles, color: "green" },
  { name: "AC Repair", icon: Snowflake, color: "blue" },
  { name: "Bike Repair", icon: Bike, color: "yellow" },
];

const workers = [
  { name: "Rahul Sharma", job: "Electrician", price: "₹300/hr", rating: "4.8", distance: "1.2 km", initial: "RS" },
  { name: "Amit Verma", job: "Plumber", price: "₹250/hr", rating: "4.7", distance: "2.1 km", initial: "AV" },
  { name: "Rohit Kumar", job: "Carpenter", price: "₹350/hr", rating: "4.9", distance: "3 km", initial: "RK" },
];

function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">A</div>
          <div>
            <h2>APNAO</h2>
            <p>Apna Kaam. Apne Log.</p>
          </div>
        </div>

        <button className="icon-button" aria-label="Notifications">
          <Bell size={21} />
          <span className="notification-dot"></span>
        </button>
      </header>

      <main className="main-content">
        <section className="location-section">
          <div>
            <span className="muted">Your location</span>
            <button className="location-button">
              <MapPin size={17} />
              Bhopal, India
              <ChevronDown size={16} />
            </button>
          </div>
          <span className="location-badge">● Local services</span>
        </section>

        <section className="hero">
          <div className="hero-content">
            <span className="hero-label">YOUR LOCAL HELP NETWORK</span>
            <h1>Need help?<br />We've got you!</h1>
            <p>Find trusted people for your everyday needs.</p>
            <button className="hero-button">
              Explore services <ArrowRight size={17} />
            </button>
          </div>
          <div className="hero-art">
            <div className="hero-circle">
              <Zap size={64} strokeWidth={1.5} />
            </div>
          </div>
        </section>

        <section className="search-section">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search electrician, plumber..."
          />
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <h2>Popular Services</h2>
              <p>What do you need today?</p>
            </div>
            <button className="text-button">See all <ArrowRight size={15} /></button>
          </div>

          <div className="service-grid">
            {services.map(({ name, icon: Icon, color }) => (
              <button className="service-card" key={name}>
                <div className={`service-icon ${color}`}>
                  <Icon size={25} />
                </div>
                <span>{name}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <h2>Nearby Workers</h2>
              <p>People ready to help you</p>
            </div>
            <button className="text-button">See all <ArrowRight size={15} /></button>
          </div>

          <div className="worker-list">
            {workers.map((worker) => (
              <article className="worker-card" key={worker.name}>
                <div className="worker-avatar">{worker.initial}</div>
                <div className="worker-info">
                  <h3>{worker.name}</h3>
                  <p>{worker.job} · {worker.distance}</p>
                  <span className="rating">
                    <Star size={14} fill="currentColor" /> {worker.rating}
                  </span>
                </div>
                <div className="worker-action">
                  <strong>{worker.price}</strong>
                  <button>View</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        <button className="nav-item active"><Home size={21} /><span>Home</span></button>
        <button className="nav-item"><ClipboardList size={21} /><span>Bookings</span></button>
        <button className="nav-item"><MessageCircle size={21} /><span>Chat</span></button>
        <button className="nav-item"><User size={21} /><span>Profile</span></button>
      </nav>
    </div>
  );
}

export default App;
