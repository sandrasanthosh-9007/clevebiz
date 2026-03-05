import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import dashboardImg from "../../assets/img.png";
import "./HeroSection.css";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const floatingCardVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: (custom) => ({
      scale: 1,
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: custom * 0.3,
        },
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: custom * 0.2,
        },
      },
    }),
  };

  // Stats data
  const statsData = [
    { value: "10K+", label: "Active Users", icon: "people" },
    { value: "98%", label: "Satisfaction Rate", icon: "star" },
    { value: "24/7", label: "Support", icon: "headset" },
  ];

  // Floating cards data (added stable IDs)
  const floatingCardsData = [
    {
      id: "project",
      icon: "kanban",
      title: "Project Management",
      subtitle: "15 active projects",
      delay: 0,
      position: { top: "10%", left: "-10%" },
      className: "card-1 d-none d-xl-block",
    },
    {
      id: "team",
      icon: "people",
      title: "Team Collaboration",
      subtitle: "24 team members",
      delay: 1,
      position: { bottom: "15%", right: "-5%" },
      className: "card-2 d-none d-xl-block",
    },
    {
      id: "finance",
      icon: "currency-dollar",
      title: "Financial Tracking",
      subtitle: "Budget: $45.2K",
      delay: 2,
      position: { top: "40%", right: "-15%" },
      className: "card-3 d-none d-xl-block",
    },
  ];

  return (
    <motion.section
      className="hero-section full-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="home"
    >
      <Container className="h-100">
        <motion.div
          className="h-100 d-flex align-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="align-items-center w-100 g-5">
            {/* Left Column - Content */}
            <Col
              xs={12}
              lg={6}
              className="hero-content text-center text-lg-start"
            >
              <motion.div
                className="hero-badge px-3 mb-4 d-flex justify-content-center justify-content-lg-start"
                variants={itemVariants}
              >
                <motion.span
                  className="badge badge-custom px-3 py-2 rounded-pill"
                  whileHover={{
                    boxShadow: "0 5px 15px rgba(249, 156, 127, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.i
                    className="bi bi-rocket me-2 icon-rocket"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  All-in-One Business Management
                </motion.span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="hero-title display-1 display-lg-3 fw-bold mb-4"
                variants={itemVariants}
              >
                Streamline Your Business with{" "}
                <motion.span
                  className="d-inline-block brand-highlight"
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 },
                  }}
                >
                  CleveBiz
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="lead mb-5 hero-subtitle fs-5 fs-lg-4"
                variants={itemVariants}
              >
                Integrated CRM, HR, and Project Management system designed to
                eliminate operational silos and enhance team collaboration.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="hero-cta d-flex flex-column flex-sm-row gap-3 mb-5 justify-content-center justify-content-lg-start"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-100 w-sm-auto"
                >
                  <Button
                    size="lg"
                    className="px-4 py-3 fw-semibold rounded-3 border-0 btn-primary-custom w-100 w-sm-auto"
                    href="#get-started"
                  >
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Start Free Trial
                      <motion.i
                        className="bi bi-arrow-right ms-2 icon-arrow"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    </motion.span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="hero-stats d-flex flex-column flex-sm-row gap-3 gap-lg-4 justify-content-center justify-content-lg-start"
                variants={itemVariants}
              >
                {statsData.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="stat-item p-3 rounded-3 w-100 w-sm-auto"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 20px rgba(42, 78, 250, 0.08)",
                      borderColor: "#ef6d48",
                      transition: { duration: 0.2 },
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <motion.div
                      className="d-flex align-items-center gap-2 justify-content-center justify-content-sm-start"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.i
                        className={`bi bi-${stat.icon} fs-4 stat-icon`}
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                      <div className="text-center text-sm-start">
                        <h3 className="h2 fw-bold mb-0 stat-value">
                          {stat.value}
                        </h3>
                        <p className="mb-0 stat-label">{stat.label}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </Col>

            {/* Right Column - Image with Floating Cards */}
            <Col xs={12} lg={6} className="hero-visual mt-5 mt-lg-0">
              <motion.div
                className="hero-image-wrapper position-relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  delay: 0.5,
                }}
              >
                {/* Main Image */}
                <motion.img
                  src={dashboardImg}
                  alt="Clevebiz Dashboard Preview"
                  className="img-fluid rounded-4 hero-image w-100"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(230, 93, 19, 0.15)",
                    transition: { duration: 0.3 },
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />

                {/* Floating Feature Cards */}
                {floatingCardsData.map((card) => (
                  <motion.div
                    key={card.id}
                    className={`floating-card ${card.className} p-3 rounded-3`}
                    style={card.position}
                    variants={floatingCardVariants}
                    initial="initial"
                    animate="animate"
                    custom={card.delay}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 15px 30px rgba(42, 78, 250, 0.12)",
                      borderColor: "#f35213",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div className="d-flex align-items-center gap-2">
                      <motion.div
                        className="p-2 rounded-3 icon-wrapper"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <i className={`bi bi-${card.icon} card-icon`}></i>
                      </motion.div>
                      <div>
                        <h6 className="mb-0 fw-semibold card-title">
                          {card.title}
                        </h6>
                        <motion.small
                          className="card-subtitle"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: card.delay,
                          }}
                        >
                          {card.subtitle}
                        </motion.small>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      {/* Background Decoration */}
      <motion.div
        className="hero-background"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="shape shape-1"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="shape shape-2"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
