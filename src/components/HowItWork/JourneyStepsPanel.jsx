import React from "react";
import { motion } from "framer-motion";

const JourneyStepsPanel = ({
  phases,
  activePhase,
  filteredSteps,
  activeStep,
  onStepClick,
}) => {
  return (
    <div className="journey-panel">
      <h4 className="journey-title">
        <i className="bi bi-rocket me-2"></i>
        {phases[activePhase].name} Steps
      </h4>

      {filteredSteps.map((step, index) => (
        <motion.div
          key={index}
          className={`step-item ${activeStep === index ? "active" : ""}`}
          onClick={() => onStepClick(index)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="step-icon-wrapper">
            <i className={`bi bi-${step.icon}`}></i>
          </div>
          <div className="flex-grow-1">
            <h6 className="step-title">{step.title}</h6>
            <p className="step-preview">
              {step.description.substring(0, 35)}...
            </p>
          </div>

          {activeStep === index && (
            <motion.div
              className="step-active-indicator"
              layoutId="activeIndicator"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default JourneyStepsPanel;
