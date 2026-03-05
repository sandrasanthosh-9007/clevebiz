import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './FeaturesSection.css';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const featuresData = [
    {
      icon: "kanban",
      title: "Project Management",
      description: "Create projects, assign tasks, set milestones, and track progress with Gantt charts.",
      highlight: "Complete project lifecycle management",
      color: "var(--primary-color)"
    },
    {
      icon: "people",
      title: "HR Management",
      description: "Manage employee records, attendance, leave requests, and automated payroll processing.",
      highlight: "Streamlined workforce management",
      color: "var(--primary-color)"
    },
    {
      icon: "graph-up",
      title: "CRM & Lead Management",
      description: "Capture leads, manage client relationships, track communications, and convert opportunities.",
      highlight: "Grow your business effectively",
      color: "var(--primary-color)"
    }
  ];

  // Header animation using useInView instead of manual IntersectionObserver
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="features-section py-5">
      <Container>
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          id='features'
        >
          <motion.span 
            className="badge-custom d-inline-block px-3 py-2 rounded-pill mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.i 
              className="bi bi-stars me-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            Core Modules
          </motion.span>
          
          <h2 className="display-5 fw-bold mb-3 text-dark">
            Three Powerful Modules,{' '}
            <motion.span 
              className="text-primary-custom d-inline-block"
              whileHover={{ scale: 1.05 }}
            >
              One Platform
            </motion.span>
          </h2>
          
          <p className="lead mx-auto text-secondary-custom features-description">
            Clevebiz integrates CRM, HR, and Project Management into a single, seamless solution
            that eliminates operational silos and enhances team collaboration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <Row className="g-4 justify-content-center">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </Row>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-5 pt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="integration-badge d-inline-flex flex-wrap flex-sm-nowrap align-items-center gap-2 gap-sm-3 px-3 px-sm-4 py-2 rounded-pill mb-4">
            <span className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-primary-custom me-1"></i>
              <span className="small fw-medium">CRM</span>
            </span>
            <span className="text-secondary-custom">+</span>
            <span className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-primary-custom me-1"></i>
              <span className="small fw-medium">HR</span>
            </span>
            <span className="text-secondary-custom">+</span>
            <span className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-primary-custom me-1"></i>
              <span className="small fw-medium">Project Management</span>
            </span>
          </div>
          
          <p className="mb-4 text-dark d-flex flex-column flex-sm-row align-items-center justify-content-center">
            <i className="bi bi-infinity text-primary-custom me-0 me-sm-2 fs-5 mb-2 mb-sm-0"></i>
            <span className="fw-medium">All three modules work together seamlessly. No integrations needed.</span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturesSection;