import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Nutritious Frosty Oyster</title>
          <meta property="og:title" content="Nutritious Frosty Oyster" />
          <link
            rel="canonical"
            href="https://nutritious-frosty-oyster-epable.teleporthq.app/"
          />
          <meta
            property="og:url"
            content="https://nutritious-frosty-oyster-epable.teleporthq.app/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-split">
          <div className="hero-split-container">
            <div className="hero-split-content">
              <div className="hero-badge">
                <span>VMM Agência</span>
              </div>
              <h1 className="home-hero-title hero-title">
                Elevating Brands Through High-Fidelity Design.
              </h1>
              <p className="home-hero-subtitle hero-subtitle">
                We craft premium digital experiences that blend professional
                minimalism with high-impact marketing strategies for the modern
                era.
              </p>
              <div className="hero-actions">
                <a href="#contact">
                  <div className="btn btn-primary btn-lg">
                    <span>Start Your Project</span>
                  </div>
                </a>
                <a href="#work">
                  <div className="btn btn-lg btn-outline">
                    <span>View Portfolio</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="hero-split-visual">
              <div className="hero-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/8111858/pexels-photo-8111858.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Professional Business Strategy"
                  className="hero-image"
                />
                <div className="hero-image-glow"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="bento-stats">
          <div className="bento-container">
            <div className="bento-header">
              <h2 className="section-title">Driven by Performance</h2>
              <p className="section-content">
                Our results speak louder than words. We focus on metrics that
                matter most to your business growth.
              </p>
            </div>
            <div className="bento-grid">
              <div className="bento-card bento-card-large">
                <div className="bento-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                    </g>
                  </svg>
                </div>
                <div className="bento-card-content">
                  <span className="bento-number">500k+</span>
                  <span className="bento-label">Leads Generated</span>
                </div>
              </div>
              <div className="bento-card">
                <div className="bento-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <div className="bento-card-content">
                  <span className="bento-number">12+</span>
                  <span className="bento-label">Years Experience</span>
                </div>
              </div>
              <div className="bento-card">
                <div className="bento-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </g>
                  </svg>
                </div>
                <div className="bento-card-content">
                  <span className="bento-number">85%</span>
                  <span className="bento-label">Conversion Rate</span>
                </div>
              </div>
              <div className="bento-card bento-card-accent">
                <div className="bento-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </g>
                  </svg>
                </div>
                <div className="bento-card-content">
                  <span className="bento-number">150+</span>
                  <span className="bento-label">Global Clients</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-snapshot">
          <div className="services-container">
            <div className="services-header">
              <h2 className="section-title">Core Offerings</h2>
              <p className="section-content">
                Tailored solutions designed for high-end market positioning.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="service-title">Growth Strategy</h3>
                <p className="service-desc">
                  Data-driven roadmaps to scale your business predictably.
                </p>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="service-title">Visual Identity</h3>
                <p className="service-desc">
                  Premium branding that resonates with luxury markets.
                </p>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="m10 9l-3 3l3 3m4 0l3-3l-3-3"></path>
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <h3 className="service-title">UI/UX Design</h3>
                <p className="service-desc">
                  High-fidelity interfaces focused on user conversion.
                </p>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 12h.01M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m14 7a18.15 18.15 0 0 1-20 0"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <h3 className="service-title">Paid Acquisition</h3>
                <p className="service-desc">
                  Optimized ad campaigns across high-intent channels.
                </p>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M12 11v4m2-2h-4m6-7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m10 0v14M6 6v14"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <h3 className="service-title">Content Engine</h3>
                <p className="service-desc">
                  Strategic storytelling that builds authority and trust.
                </p>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="service-title">SEO Optimization</h3>
                <p className="service-desc">
                  Technical and creative SEO for organic dominance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing-trio">
          <div className="pricing-container">
            <div className="pricing-header">
              <h2 className="section-title">Investment Plans</h2>
              <p className="section-content">
                Choose the level of partnership that fits your current growth
                stage.
              </p>
            </div>
            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-plan">
                  <span>Essential</span>
                </div>
                <div className="pricing-price">
                  <span>
                    {' '}
                    $2,499
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>/mo</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Core Branding
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Landing Page Design
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Basic SEO
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Monthly Reporting
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
                <a href="#">
                  <div className="btn btn-outline">
                    <span>Select Plan</span>
                  </div>
                </a>
              </div>
              <div className="pricing-card pricing-card-featured">
                <div className="pricing-badge">
                  <span>Most Popular</span>
                </div>
                <div className="pricing-plan">
                  <span>Premium</span>
                </div>
                <div className="pricing-price">
                  <span>
                    {' '}
                    $4,999
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>/mo</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Full Visual Identity
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Custom UI/UX Design
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Paid Ad Management
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Bi-weekly Strategy Calls
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
                <a href="#">
                  <div className="btn btn-primary">
                    <span>Select Plan</span>
                  </div>
                </a>
              </div>
              <div className="pricing-card">
                <div className="pricing-plan">
                  <span>Elite</span>
                </div>
                <div className="pricing-price">
                  <span>
                    {' '}
                    $9,999
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>/mo</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Full Funnel Architecture
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Dedicated Content Team
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Advanced CRO Lab
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      24/7 Priority Access
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
                <a href="#">
                  <div className="btn btn-outline">
                    <span>Select Plan</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-rail">
          <div className="rail-header">
            <h2 className="section-title">Client Success Stories</h2>
          </div>
          <div className="rail-container">
            <div className="rail-track">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    &quot;VMM Agência transformed our digital presence. Their
                    attention to high-fidelity detail is unmatched in the
                    industry.&quot;
                  </p>
                </div>
                <div className="testimonial-footer">
                  <img
                    src="https://images.pexels.com/photos/7651589/pexels-photo-7651589.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Sarah Jenkins"
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <span className="testimonial-name">Sarah Jenkins</span>
                    <span className="testimonial-role">CEO, Aura Luxury</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    &quot;The ROI we&apos;ve seen since partnering with VMM has
                    been extraordinary. They truly understand the premium
                    market.&quot;
                  </p>
                </div>
                <div className="testimonial-footer">
                  <img
                    src="https://images.pexels.com/photos/7222266/pexels-photo-7222266.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Marcus Thorne"
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <span className="testimonial-name">Marcus Thorne</span>
                    <span className="testimonial-role">
                      Founder, Thorne &amp; Co.
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    &quot;A minimalist aesthetic combined with aggressive
                    marketing results. Exactly what our brand needed to
                    scale.&quot;
                  </p>
                </div>
                <div className="testimonial-footer">
                  <img
                    src="https://images.pexels.com/photos/35754361/pexels-photo-35754361.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Elena Rossi"
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <span className="testimonial-name">Elena Rossi</span>
                    <span className="testimonial-role">Director, Studio V</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>
                    &quot;Professionalism at its finest. The bento-style
                    reporting and clear communication make them a joy to work
                    with.&quot;
                  </p>
                </div>
                <div className="testimonial-footer">
                  <img
                    src="https://images.pexels.com/photos/5971245/pexels-photo-5971245.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="David Chen"
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <span className="testimonial-name">David Chen</span>
                    <span className="testimonial-role">
                      VP Marketing, TechFlow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="work-showcase">
          <div className="showcase-header">
            <h2 className="section-title">Selected Case Studies</h2>
            <p className="section-content">
              A glimpse into the high-performance experiences we&apos;ve built.
            </p>
          </div>
          <div className="showcase-grid">
            <div className="work-card">
              <img
                src="https://images.pexels.com/photos/15635401/pexels-photo-15635401.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Fintech Interface"
                className="work-image"
              />
              <div className="work-overlay">
                <div className="work-meta">
                  <span className="work-category">UI/UX Design</span>
                  <h3 className="work-title">NeoBank Global</h3>
                  <p className="work-result">+140% User Retention</p>
                </div>
              </div>
            </div>
            <div className="work-card">
              <img
                src="https://images.pexels.com/photos/17485352/pexels-photo-17485352.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="E-commerce Experience"
                className="work-image"
              />
              <div className="work-overlay">
                <div className="work-meta">
                  <span className="work-category">E-commerce</span>
                  <h3 className="work-title">Luxe Apparel</h3>
                  <p className="work-result">+200% Conversion Rate</p>
                </div>
              </div>
            </div>
            <div className="work-card">
              <img
                src="https://images.pexels.com/photos/7661185/pexels-photo-7661185.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Brand Identity"
                className="work-image"
              />
              <div className="work-overlay">
                <div className="work-meta">
                  <span className="work-category">Branding</span>
                  <h3 className="work-title">Vertex Solutions</h3>
                  <p className="work-result">Global Rebrand Launch</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-cta">
          <div className="cta-container">
            <div className="cta-card">
              <div className="cta-content">
                <h2 className="section-title">Ready to Elevate Your Brand?</h2>
                <p className="section-content">
                  Join the ranks of high-performing companies scaling with VMM
                  Agência. Book your strategy call today.
                </p>
                <div className="cta-brand">
                  <span className="cta-logo">VMM Agência</span>
                </div>
              </div>
              <div className="cta-form-wrapper">
                <form
                  action="/submit"
                  method="POST"
                  data-form-id="c4619b8a-a306-4065-964c-8fc2c5eb59bf"
                  className="cta-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required="true"
                      id="thq_textinput_Xo8F"
                      name="textinput"
                      data-form-field-id="thq_textinput_Xo8F"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Work Email"
                      required="true"
                      id="thq_textinput_j9A6"
                      name="textinput"
                      data-form-field-id="thq_textinput_j9A6"
                      className="form-input"
                    />
                  </div>
                  <button
                    type="submit"
                    id="thq_button_2NZ1"
                    name="button"
                    data-form-field-id="thq_button_2NZ1"
                    className="btn btn-lg btn-accent"
                  >
                    Book Demo Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
section {
  background-color: var(--color-forest);
  color: var(--color-sand);
  overflow: hidden;
  position: relative;
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="vmm-interactions">
(function(){
  // Subtle Scroll Reveal Animation for Bento Cards
  const bentoCards = document.querySelectorAll(".bento-card")
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const bentoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 100)
        bentoObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  bentoCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "all 0.6s ease-out"
    bentoObserver.observe(card)
  })

  // Testimonial Rail Infinite Scroll Simulation (Auto-scroll hint)
  const railContainer = document.querySelector(".rail-container")
  if (railContainer) {
    let isDown = false
    let startX
    let scrollLeft

    railContainer.addEventListener("mousedown", (e) => {
      isDown = true
      startX = e.pageX - railContainer.offsetLeft
      scrollLeft = railContainer.scrollLeft
    })

    railContainer.addEventListener("mouseleave", () => {
      isDown = false
    })

    railContainer.addEventListener("mouseup", () => {
      isDown = false
    })

    railContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - railContainer.offsetLeft
      const walk = (x - startX) * 2
      railContainer.scrollLeft = scrollLeft - walk
    })
  }

  // Form Success Feedback
  const contactForm = document.querySelector(".cta-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // Logic for native submission is handled by HTML action/method
      // This is just for visual UX enhancement as per rules
      const submitBtn = contactForm.querySelector("button")
      const originalText = submitBtn.textContent

      submitBtn.disabled = true
      submitBtn.textContent = "Sending..."

      // We don't preventDefault here to allow native submission
      // but we add a small visual delay for UX feel
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div aria-label="Sign up to TeleportHQ" className="home-container6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon76"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="home-text42">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container6 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon76 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text42 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

export default Home
