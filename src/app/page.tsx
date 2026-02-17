import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <section className="collections" id="collections">
        <div className="container">
          <span className="section-subtitle">Exclusives</span>
          <h2 className="section-title">The Winter Edit</h2>
          <div style={{ position: 'relative', height: '600px', marginTop: '3rem', backgroundColor: 'var(--accent)' }}>
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
              alt="Collection banner"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
            />
            <div style={{
              position: 'absolute',
              bottom: '10%',
              left: '5%',
              color: 'var(--text-main)',
              maxWidth: '450px',
              padding: '2rem',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 300 }}>Timeless Fashion</h3>
              <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Pieces that transcend seasons. Handcrafted with precision.</p>
              <a href="#shop" className="btn btn-primary">Explore Now</a>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />

      {/* Why Choose Us Section */}
      <section style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', textAlign: 'center' }}>
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase' }}>Free Shipping</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Complimentary on all orders over $200.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase' }}>Sustainable</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Committed to ethical sourcing and production.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase' }}>Support</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Available to assist you 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
