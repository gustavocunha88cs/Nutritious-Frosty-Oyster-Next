import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <Link href="/">
              <a>
                <div aria-label="VMM Agência Home" className="navigation-brand">
                  <span className="section-title">VMM Agência</span>
                </div>
              </a>
            </Link>
            <div className="navigation-desktop-links">
              <Link href="/">
                <a>
                  <div className="navigation-link">
                    <span>Services</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="navigation-link">
                    <span>Portfolio</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="navigation-link">
                    <span>Process</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="navigation-link">
                    <span>Pricing</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="btn btn-primary btn-sm">
                    <span>Start a Project</span>
                  </div>
                </a>
              </Link>
            </div>
            <button
              id="mobileToggle"
              aria-expanded="false"
              aria-controls="mobileMenu"
              aria-label="Toggle navigation"
              className="navigation-toggle"
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
                  d="M4 8h16M4 16h16"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="mobileMenu" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <Link href="/">
              <a>
                <div aria-label="VMM Agência Home" className="navigation-brand">
                  <span className="section-title">VMM Agência</span>
                </div>
              </a>
            </Link>
            <button
              id="mobileClose"
              aria-label="Close navigation"
              className="navigation-toggle"
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
                  d="m15 18l-.722-3.25M2 8a10.645 10.645 0 0 0 20 0m-2 7l-1.726-2.05M4 15l1.726-2.05M9 18l.722-3.25"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <div className="navigation-mobile-links">
              <Link href="/">
                <a>
                  <div className="navigation-mobile-link">
                    <span>Services</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="navigation-mobile-link">
                    <span>Portfolio</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="navigation-mobile-link">
                    <span>Process</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="navigation-mobile-link">
                    <span>Pricing</span>
                  </div>
                </a>
              </Link>
            </div>
            <div className="navigation-mobile-footer">
              <Link href="/">
                <a>
                  <div className="btn btn-primary btn-lg">
                    <span>Start a Project</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-mobile-overlay {
  transition: none;
}
.navigation-mobile-link:hover {
  transform: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById("mobileToggle")
  const mobileClose = document.getElementById("mobileClose")
  const mobileMenu = document.getElementById("mobileMenu")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")

  const toggleMenu = (state) => {
    mobileMenu.classList.toggle("is-active", state)
    mobileToggle.setAttribute("aria-expanded", state)
    document.body.style.overflow = state ? "hidden" : ""
  }

  mobileToggle.addEventListener("click", () => toggleMenu(true))
  mobileClose.addEventListener("click", () => toggleMenu(false))

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false))
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && mobileMenu.classList.contains("is-active")) {
      toggleMenu(false)
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("is-active")) {
      toggleMenu(false)
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
