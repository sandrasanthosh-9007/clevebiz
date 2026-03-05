
import { Col, Card } from 'react-bootstrap';  
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FeaturesSection.css';

const FeatureCard = ({ feature, index }) => {
  const [cardRef, cardInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <Col xs={12} md={6} lg={4} className="d-flex">
      <motion.div
        ref={cardRef}
        className="w-100"
        initial={{ opacity: 0, y: 50 }}
        animate={cardInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.6,
          delay: index * 0.15,
          type: "spring",
          stiffness: 100,
          damping: 12
        }}
        whileHover={{ y: -10 }}
      >
        <Card className="feature-card h-100 border-0">
          <Card.Body className="p-4 p-xl-5 text-center">
            {/* Icon */}
            <motion.div 
              className="feature-icon-wrapper mx-auto mb-4"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <i className={`bi bi-${feature.icon} feature-icon`}></i>
            </motion.div>
            
            {/* Title */}
            <Card.Title className="fw-bold mb-3 text-dark fs-4 fs-xl-3">
              {feature.title}
            </Card.Title>
            
            {/* Highlight Badge */}
            <div className="highlight-badge d-inline-block px-3 py-1 rounded-pill mb-3">
              <i className="bi bi-check-circle-fill me-1"></i>
              {feature.highlight}
            </div>
            
            {/* Description */}
            <Card.Text className="text-secondary-custom mb-4 small">
              {feature.description}
            </Card.Text>
          </Card.Body>
          
          {/* Corner accent */}
          <div className="card-corner"></div>
        </Card>
      </motion.div>
    </Col>
  );
};

export default FeatureCard;