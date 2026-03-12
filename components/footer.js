import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-wrapper">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footer-brand-column">
                <div className="footer-logo-container">
                  <span className="footer-logo-text">VMM Agência</span>
                </div>
                <p className="footer-description section-content">
                  Elevating digital presence through high-fidelity UI design and
                  strategic marketing solutions. We turn leads into loyal
                  customers with a minimalist, premium approach.
                </p>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-icon">
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
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-icon">
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
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle cx="4" cy="4" r="2"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Twitter" className="footer-social-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-links-column">
                <h3 className="footer-column-title">Quick Links</h3>
                <nav className="footer-nav">
                  <a href="#">
                    <div className="footer-link">
                      <span>Services</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-link">
                      <span>Portfolio</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-link">
                      <span>Bento Stats</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-link">
                      <span>Pricing Plans</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-link">
                      <span>Testimonials</span>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="footer-newsletter-column">
                <h3 className="footer-column-title">Stay Connected</h3>
                <p className="footer-newsletter-text">
                  Join our newsletter for the latest design insights and agency
                  updates.
                </p>
                <form
                  action="/subscribe"
                  method="POST"
                  data-form-id="8ccb45a9-5b7c-4cf5-a8fa-532019cb6e3f"
                  className="footer-newsletter-form"
                >
                  <div className="footer-input-group">
                    <input
                      type="email"
                      placeholder="Your email address"
                      required="true"
                      aria-label="Email Address"
                      id="thq_textinput_lMky"
                      name="textinput"
                      data-form-field-id="thq_textinput_lMky"
                      className="footer-input"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      id="thq_button_Zdmc"
                      name="button"
                      data-form-field-id="thq_button_Zdmc"
                      className="footer-submit-btn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 12h14m-7-7l7 7l-7 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p className="footer-copyright">
                  &amp;copy; 2026 VMM Agência. All rights reserved.
                </p>
                <div className="footer-legal-links">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-interactivity">
(function(){
  const footerForm = document.querySelector(".footer-newsletter-form")
  const footerInputGroup = document.querySelector(".footer-input-group")

  if (footerForm) {
    footerForm.addEventListener("submit", (e) => {
      const emailInput = footerForm.querySelector('input[type="email"]')

      if (emailInput.checkValidity()) {
        const originalContent = footerForm.innerHTML

        footerForm.style.transition = "opacity 0.3s ease"
        footerForm.style.opacity = "0"

        setTimeout(() => {
          footerForm.innerHTML = '<p class="footer-newsletter-text" style="color: #E4E6DB; font-weight: 600;">Thank you for subscribing! Check your inbox soon.</p>'
          footerForm.style.opacity = "1"
        }, 300)
      }
    })
  }

  // Visual feedback for input focus
  const footerInputField = document.querySelector(".footer-input")
  if (footerInputField && footerInputGroup) {
    footerInputField.addEventListener("focus", () => {
      footerInputGroup.style.boxShadow = "0 0 0 2px color-mix(in srgb, #E4E6DB 20%, transparent)"
    })

    footerInputField.addEventListener("blur", () => {
      footerInputGroup.style.boxShadow = "none"
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
