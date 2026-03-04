import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './StrengthsSection.css';

const StrengthsSection = () => {
  const strengths = [
    {
      id: 1,
      title: "Integrated CRM, HR, and Project Management",
      icon: "grid-3x3-gap-fill",
      description: "All-in-one platform combining customer relationship management, human resources, and project tracking."
    },
    {
      id: 2,
      title: "Centralized Dashboard for Streamlined Oversight",
      icon: "speedometer2",
      description: "Single view dashboard providing complete visibility across all business operations and projects."
    },
    {
      id: 3,
      title: "Secure Role-Based Permission System",
      icon: "shield-lock",
      description: "Granular access control with customizable permissions for administrators, managers, and team members."
    },
    {
      id: 4,
      title: "Real-Time Tracking of Projects and Financials",
      icon: "clock-history",
      description: "Live monitoring of project progress, task completion, budgets, and financial metrics."
    },
    {
      id: 5,
      title: "Business Growth Through Structured Lead Management",
      icon: "graph-up-arrow",
      description: "Organized lead capture, tracking, and conversion pipeline to turn prospects into clients."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  return (
    <section className="strengths-section py-5">
      <Container>
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-custom d-inline-block px-3 py-2 rounded-pill mb-3">
            Why Clevebiz
          </span>
          
          <h2 className="display-6 fw-semibold mb-3 text-dark">
            Our <span className="text-primary-custom">Strengths</span>
          </h2>
          
          <p className="text-secondary-custom mx-auto" style={{ maxWidth: '600px' }}>
            Five core strengths that make Clevebiz different
          </p>
        </motion.div>

        {/* Strengths Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="g-4">
            {strengths.map((strength, index) => {
              const [cardRef, cardInView] = useInView({
                threshold: 0.3,
                triggerOnce: false
              });

              return (
                <Col key={strength.id} xs={12} md={6} lg={4}>
                  <motion.div
                    ref={cardRef}
                    variants={itemVariants}
                    className="strength-card h-100 p-4"
                    whileHover={{ y: -5 }}
                  >
                    {/* Icon with wrapper for hover effect */}
                    <div className="strength-icon-wrapper mb-3">
                      <i className={`bi bi-${strength.icon} strength-icon`}></i>
                    </div>

                    {/* Content */}
                    <h3 className="h5 fw-semibold mb-2 text-dark">{strength.title}</h3>
                    <p className="text-secondary-custom small mb-0">{strength.description}</p>

                    {/* Shine effect */}
                    <div className="card-shine"></div>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default StrengthsSection;