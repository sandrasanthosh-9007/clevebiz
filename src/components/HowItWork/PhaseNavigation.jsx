import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const PhaseNavigation = ({ phases, activePhase, onPhaseChange }) => {
  return (
    <Row className="mb-4 g-2">
      <Col xs={12}>
        <div className="phase-navigation">
          {phases.map((phase, index) => (
            <motion.button
              key={index}
              className={`phase-btn ${activePhase === index ? 'active' : ''}`}
              onClick={() => onPhaseChange(index)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="phase-icon">
                <i className={`bi bi-${phase.icon}`}></i>
              </span>
              <span className="phase-name">{phase.name}</span>
            </motion.button>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default PhaseNavigation;