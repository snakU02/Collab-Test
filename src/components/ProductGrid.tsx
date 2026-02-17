import React from 'react';
import Image from 'next/image';

const PRODUCTS = [
    {
        id: 1,
        name: "Classic Chronograph",
        price: "$299.00",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e21ea9?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Minimalist Leather Bag",
        price: "$185.00",
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Signature Fragrance",
        price: "$120.00",
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Premium Sunglasses",
        price: "$150.00",
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1511499767390-a73903975957?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Bluetooth Headphones",
        price: "$350.00",
        category: "Tech",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Casual Sneakers",
        price: "$95.00",
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function ProductGrid() {
    return (
        <section id="shop" className="container">
            <span className="section-subtitle">Curated Selection</span>
            <h2 className="section-title">New Arrivals</h2>
            <div className="product-grid" style={{ marginTop: '5rem', gap: '4rem 2rem' }}>
                {PRODUCTS.map((product) => (
                    <div key={product.id} className="product-card" style={{ cursor: 'pointer' }}>
                        <div className="product-image-wrapper">
                            <Image
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="product-info" style={{ textAlign: 'left' }}>
                            <h3 className="product-name" style={{ fontSize: '0.9rem', fontWeight: 400, marginBottom: '0.25rem' }}>{product.name}</h3>
                            <span className="product-price" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
