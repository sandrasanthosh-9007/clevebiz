import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./StrengthsSection.css";


const StrengthCard = ({ strength }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Col xs={12} md={6} lg={4}>
      <motion.div
        ref={ref}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover={{ y: -5 }}
        className="strength-card h-100 p-4"
      >
        <div className="strength-icon-wrapper mb-3">
          <i className={`bi bi-${strength.icon} strength-icon`}></i>
        </div>

        <h3 className="h5 fw-semibold mb-2 text-dark">
          {strength.title}
        </h3>

        <p className="text-secondary-custom small mb-0">
          {strength.description}
        </p>

        <div className="card-shine"></div>
      </motion.div>
    </Col>
  );
};


const StrengthsSection = () => {
  const strengths = [
    {
      id: 1,
      title: "Integrated CRM, HR, and Project Management",
      icon: "grid-3x3-gap-fill",
      description:
        "All-in-one platform combining customer relationship management, human resources, and project tracking.",
    },
    {
      id: 2,
      title: "Centralized Dashboard for Streamlined Oversight",
      icon: "speedometer2",
      description:
        "Single view dashboard providing complete visibility across all business operations and projects.",
    },
    {
      id: 3,
      title: "Secure Role-Based Permission System",
      icon: "shield-lock",
      description:
        "Granular access control with customizable permissions for administrators, managers, and team members.",
    },
    {
      id: 4,
      title: "Real-Time Tracking of Projects and Financials",
      icon: "clock-history",
      description:
        "Live monitoring of project progress, task completion, budgets, and financial metrics.",
    },
    {
      id: 5,
      title: "Business Growth Through Structured Lead Management",
      icon: "graph-up-arrow",
      description:
        "Organized lead capture, tracking, and conversion pipeline to turn prospects into clients.",
    },
  ];

  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
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

          <p
            className="text-secondary-custom mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Five core strengths that make Clevebiz different
          </p>
        </motion.div>

        {/* Cards */}
        <Row className="g-4">
          {strengths.map((strength) => (
            <StrengthCard key={strength.id} strength={strength} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StrengthsSection;