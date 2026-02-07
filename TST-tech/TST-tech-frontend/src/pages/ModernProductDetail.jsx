import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FileText, Wrench, BookOpen, Video, ArrowLeft,
  Check, ChevronLeft, ChevronRight, Zap, Shield, Award
} from 'lucide-react';
import './ModernProductDetail.css';

const ModernProductDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [product, setProduct] = useState(null);

  // 🔗 FETCH PRODUCT FROM BACKEND
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) {
    return <div className="container py-20">Loading product...</div>;
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="modern-product-detail">
      <div className="container">
        <Link to="/products" className="back-button">
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>
      </div>

      <div className="product-header">
        <div className="container">
          <div className="product-layout">
            <div className="product-gallery">
              <div className="main-image-container">
                <div className="image-badge">
                  <Award size={16} />
                  <span>Premium Quality</span>
                </div>
                <img
                  src={product.images?.[activeImage] || '/api/placeholder/600/600'}
                  alt={product.name}
                  className="main-image"
                />

                {product.images?.length > 1 && (
                  <>
                    <button className="image-nav prev" onClick={prevImage}>
                      <ChevronLeft size={24} />
                    </button>
                    <button className="image-nav next" onClick={nextImage}>
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="product-info">
              <div className="category-badge">
                <Shield size={14} />
                <span>{product.category}</span>
              </div>

              <h1 className="product-title">{product.name}</h1>
              <p className="product-tagline">{product.tagline}</p>

              <div className="key-features">
                <h3 className="section-title">
                  <Zap size={20} />
                  Key Features
                </h3>
                <div className="features-grid">
                  {product.features?.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <div className="feature-label">{feature.label}</div>
                      <div className="feature-value">{feature.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="quick-contact">
                <p>Need assistance with this product?</p>
                <Link to="/contact" className="contact-link">
                  Contact Our Team →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-details-section">
        <div className="container">
          <div className="details-grid">
            <div className="detail-card">
              <h2 className="detail-title">Product Highlights</h2>
              <ul className="highlights-list">
                {product.highlights?.map((item, index) => (
                  <li key={index} className="highlight-item">
                    <Check size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-card">
              <h2 className="detail-title">Technical Specifications</h2>
              {product.specifications?.map((spec, index) => (
                <div key={index} className="spec-row">
                  <div className="spec-label">{spec.label}</div>
                  <div className="spec-value">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernProductDetail;
