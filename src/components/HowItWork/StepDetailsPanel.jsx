import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const StepDetailsPanel = ({ 
  currentStep, 
  activeStep, 
  filteredSteps, 
  phases, 
  activePhase,
  steps 
}) => {
  if (!currentStep) return null;

  // Compute step number once for readability
  const stepNumber =
    steps.findIndex(s => s.title === currentStep.title) + 1;

  const progressPercentage =
    ((activeStep + 1) / filteredSteps.length) * 100;

  return (
    <motion.div 
      className="active-step-panel"
      key={activeStep}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="active-step-header">
        <div className="active-step-icon">
          <i className={`bi bi-${currentStep.icon} fs-1`}></i>
        </div>

        <div>
          <div className="step-badge-wrapper">
            <span className="step-badge">
              Step {stepNumber}
            </span>

            <span className="phase-badge">
              {phases[activePhase].name}
            </span>
          </div>

          <h3 className="active-step-title">
            {currentStep.title}
          </h3>

          <p className="active-step-description">
            {currentStep.description}
          </p>
        </div>
      </div>

      {/* Quick Info Tags */}
      <div className="info-tags mb-4">
        <div className="info-tag">
          <i className="bi bi-people me-2"></i>
          {currentStep.role}
        </div>
      </div>

      {/* Detail Cards */}
      <Row className="g-3 mb-4">
        {currentStep.details.map((detail, idx) => (
          <Col md={6} key={idx}>
            <motion.div 
              className="detail-card"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <i className="bi bi-star-fill detail-icon"></i>
              <p className="detail-text">{detail}</p>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-header">
          <span className="progress-label">
            <i className="bi bi-rocket me-2"></i>
            Phase Progress
          </span>

          <span className="progress-count">
            Step {activeStep + 1} of {filteredSteps.length}
          </span>
        </div>

        <div className="progress">
          <motion.div 
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StepDetailsPanel;