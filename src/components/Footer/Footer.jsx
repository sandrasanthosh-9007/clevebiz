import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

const Footer = () => {
  /* =========================
     Configuration (No Hardcoding)
  ========================= */
  const contactInfo = {
    address: "123 Business Ave, Suite 100",
    email: "hello@clevebiz.com",
    phone: "+1 (555) 123-4567",
  };

  /* =========================
     State
  ========================= */
  const [showQueryModal, setShowQueryModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const timeoutRef = useRef(null);

  /* =========================
     Cleanup Timeout on Unmount
  ========================= */
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  /* =========================
     Handlers
  ========================= */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setShowSuccess(true);

    timeoutRef.current = setTimeout(() => {
      setShowSuccess(false);
      setShowQueryModal(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  const handleClose = () => {
    setShowQueryModal(false);
    setFormData({ name: "", email: "", message: "" });

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <>
      {/* =========================
          Footer Section
      ========================= */}
      <footer className="footer-section py-5">
        <Container>
          <Row className="g-4 justify-content-center">
            {/* Company Info */}
            <Col xs={12} md={6} lg={5}>
              <div className="footer-brand mb-4 text-center text-md-start">
                <h3 className="footer-logo">
                  Cleve<span className="text-primary-custom">Biz</span>
                </h3>
                <p className="footer-tagline text-secondary-custom mt-3 mx-auto mx-md-0">
                  Integrated CRM, HR, and Project Management system for modern businesses.
                </p>
              </div>

              {/* Contact Info */}
              <div className="footer-contact">
                <div className="contact-item d-flex align-items-center mb-3 justify-content-center justify-content-md-start">
                  <i className="bi bi-geo-alt-fill text-primary-custom me-3"></i>
                  <span className="text-secondary-custom">
                    {contactInfo.address}
                  </span>
                </div>

                <div className="contact-item d-flex align-items-center mb-3 justify-content-center justify-content-md-start">
                  <i className="bi bi-envelope-fill text-primary-custom me-3"></i>
                  <span className="text-secondary-custom">
                    {contactInfo.email}
                  </span>
                </div>

                <div className="contact-item d-flex align-items-center mb-3 justify-content-center justify-content-md-start">
                  <i className="bi bi-telephone-fill text-primary-custom me-3"></i>
                  <span className="text-secondary-custom">
                    {contactInfo.phone}
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="footer-social mt-4 text-center text-md-start">
                <a href="#" className="social-link me-2">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="social-link me-2">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" className="social-link me-2">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </Col>

            {/* Quick Links */}
            <Col xs={12} md={6} lg={5}>
              <div className="text-center text-md-start">
                <h5 className="footer-title mb-4 d-inline-block">
                  Quick Links
                </h5>

                <ul className="footer-links list-unstyled">
                  <li className="mb-3">
                    <a href="#home" className="footer-link">
                      <i className="bi bi-chevron-right me-2 small"></i>
                      Home
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#features" className="footer-link">
                      <i className="bi bi-chevron-right me-2 small"></i>
                      Features
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#how-it-works" className="footer-link">
                      <i className="bi bi-chevron-right me-2 small"></i>
                      How It Works
                    </a>
                  </li>
                </ul>

                <div className="footer-bottom-links mt-4 d-flex flex-wrap justify-content-center justify-content-md-start">
                  <a href="#privacy" className="bottom-link me-3">
                    Privacy Policy
                  </a>
                  <a href="#terms" className="bottom-link me-3">
                    Terms of Service
                  </a>
                  <a href="#cookies" className="bottom-link">
                    Cookies
                  </a>
                </div>
              </div>
            </Col>
          </Row>

          <hr className="footer-divider my-4" />

          <Row>
            <Col xs={12} className="text-center">
              <p className="copyright mb-0 small text-secondary-custom">
                © {new Date().getFullYear()} CleveBiz. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* =========================
          Floating Query Button
      ========================= */}
      <motion.div
        className="query-tab"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowQueryModal(true)}
      >
        <i className="bi bi-chat-dots-fill"></i>
        <span className="query-tab-text d-none d-sm-inline">
          Quick Query
        </span>
      </motion.div>

      {/* =========================
          Query Modal
      ========================= */}
      <AnimatePresence>
        {showQueryModal && (
          <Modal
            show={showQueryModal}
            onHide={handleClose}
            centered
            className="query-modal"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <Modal.Header closeButton>
                <Modal.Title>Have a Question?</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                {showSuccess ? (
                  <div className="text-center py-4">
                    <h5>Message Sent!</h5>
                    <p>We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="How can we help you?"
                        required
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      className="btn-primary-custom w-100"
                    >
                      Send Message
                    </Button>
                  </Form>
                )}
              </Modal.Body>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;