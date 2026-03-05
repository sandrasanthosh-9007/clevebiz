import { useState, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './HowItWorksSection.css';

// Import sub-components
import PhaseNavigation from './PhaseNavigation';
import JourneyStepsPanel from './JourneyStepsPanel';
import StepDetailsPanel from './StepDetailsPanel';

// Data
import { phases, steps } from './workflowData';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  // Memoized filtered steps
  const filteredSteps = useMemo(() => {
    return steps.filter(step => step.phase === activePhase);
  }, [activePhase]);

  const handlePhaseChange = (phaseIndex) => {
    setActivePhase(phaseIndex);
    setActiveStep(0);
  };

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const currentStep = filteredSteps[activeStep] || filteredSteps[0];

  return (
    <section className="how-it-works-section py-5" id="how-it-works">
      <Container fluid className="px-4 px-lg-5">

        {/* Section Title */}
        <Row className="mb-5">
          <Col xs={12}>
            <h2 className="section-title">
              How <span>Clevebiz</span> Works
            </h2>
            <p className="section-subtitle">
              Complete business management workflow from setup to growth
            </p>
          </Col>
        </Row>

        {/* Phase Navigation */}
        <PhaseNavigation
          phases={phases}
          activePhase={activePhase}
          onPhaseChange={handlePhaseChange}
        />

        <Row>
          {/* Left Column - Journey Steps */}
          <Col lg={4} className="mb-4 mb-lg-0">
            <JourneyStepsPanel
              phases={phases}
              activePhase={activePhase}
              filteredSteps={filteredSteps}
              activeStep={activeStep}
              onStepClick={handleStepClick}
            />
          </Col>

          {/* Right Column - Step Details */}
          <Col lg={8}>
            <StepDetailsPanel
              currentStep={currentStep}
              activeStep={activeStep}
              filteredSteps={filteredSteps}
              phases={phases}
              activePhase={activePhase}
              steps={steps}
            />
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default HowItWorksSection;