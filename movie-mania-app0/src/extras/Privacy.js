import React from "react";
import { Container } from "react-bootstrap";
import "./extrastyle.css"; // Import your custom styles

const Privacy = () => {
  return (
    <div className="about-container">
      <Container className="cont">
        <h1 className="about-title">Privacy Policy</h1>
        <div className="about-content">
          <p>
              <h2>MovieMania</h2>
          Welcome to MovieMania! This Privacy Policy describes how your personal
        information is collected, used, and shared when you visit or make a
        purchase from our website [www.moviemania.com] .
          </p>
          <p><h2>Information We Collect:</h2>We collect personal information you provide directly to us. This may
        include your name, email address, and other information you provide
        when you create an account, subscribe to our newsletter, or contact us.
      </p>
      <h2>How We Use Your Information:</h2>
      <p>
        We use the information we collect to operate and maintain our Site,
        send you marketing communications, respond to your comments or
        questions, and to comply with applicable laws and regulations.
      </p>
      <h2>Sharing Your Information:</h2>
      <p>
        We may share your personal information with third parties to help us
        use your information as described above. For example, we use
        Shopify to power our online store—you can read more about how Shopify
        uses your Personal Information here:
        https://www.shopify.com/legal/privacy.
      </p>
      <h2>Your Choices:</h2>
      <p>
        If you no longer want us to process your data, please contact us at
        [contact@moviemania.com].
      </p>

      <h2>Changes:</h2>
      <p>
        We may update this privacy policy from time to time in order to reflect,
        for example, changes to our practices or for other operational, legal,
        or regulatory reasons.
      </p>
      <h2>Contact Us:</h2>
      <p>
        For more information about our privacy practices, if you have
        questions, or if you would like to make a complaint, please contact us
        by email at [contact@moviemania.com].
      </p>
        </div>
      </Container>
     
    </div>
  );
};

export default Privacy;
