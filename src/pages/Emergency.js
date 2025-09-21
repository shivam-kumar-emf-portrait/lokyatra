import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

import img1 from "../assets/image1.png";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";

const Emergency = () => {
  const constitutionRules = [
    "Passengers must respect the driver and staff at all times.",
    "Eating and drinking inside the bus is prohibited.",
    "Passengers should not harass or misbehave with fellow passengers.",
    "Bus members must adhere to traffic safety rules and signals.",
    "Priority seating must be given to elderly, pregnant women, and differently-abled passengers.",
    "Passengers should keep the bus clean and dispose of trash properly.",
    "Do not distract the driver while the bus is in motion.",
    "Use of mobile phones in silent mode is recommended.",
    "Emergency exits must be kept clear and accessible at all times.",
    "Passengers must wear masks and maintain hygiene as per health guidelines.",
    "Follow instructions given by conductor.",
    "Report suspicious activity to authorities.",
  ];

  const services = [
    { name: "Police", number: "100" },
    { name: "Ambulance", number: "102" },
    { name: "Firefighter", number: "101" },
    { name: "Women's Helpline", number: "1091" },
    { name: "Disaster Management", number: "108" },
  ];

  const ethicsImages = [
    { src: img1, alt: "No Smoking", caption: "No Smoking and Alcohol" },
    { src: img2, alt: "Safe Journey", caption: "Safe Journey" },
    { src: img3, alt: "Maintain Silence", caption: "No Noise" },
  ];

  return (
    <section
      className="emergency-page card"
      style={{
        display: "flex",
        gap: 15,
        minHeight: 600,
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          flex: "3 1 55%",
          minWidth: 320,
          paddingRight: 10,
          fontSize: 18,
          lineHeight: 1.6,
          color: "#4a3c69",
        }}
      >
        <h2 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 15 }}>Emergency Services</h2>
        <ul className="emergency-list" style={{ marginBottom: 20 }}>
          {services.map(({ name, number }) => (
            <li key={number} style={{ marginBottom: 12 }}>
              <a
                href={`tel:${number}`}
                className="phone-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "#003ea1",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 18,
                }}
                aria-label={`Call ${name}`}
              >
                <FaPhoneAlt style={{ color: "#003ea1", fontSize: 20 }} />
                {name}: {number}
              </a>
            </li>
          ))}
        </ul>

        <h3 style={{ fontWeight: "700", fontSize: 24, marginBottom: 12 }}>Indian Constitution Rules and Ethics</h3>
        <ul className="constitution-rules" style={{ paddingLeft: "1.2rem" }}>
          {constitutionRules.map((rule, idx) => (
            <li key={idx} style={{ marginBottom: 10, fontSize: 18 }}>
              {rule}
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          flex: "1 1 35%",
          minWidth: 280,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          paddingLeft: 0,
        }}
      >
        {ethicsImages.map(({ src, alt, caption }, idx) => (
          <div
            key={idx}
            style={{
              borderRadius: 16,
              boxShadow: "0 8px 20px #bc8dee91",
              padding: 12,
              backgroundColor: "#faf9fb",
              cursor: "default",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{
                width: "100%",
                height: 190,
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
            <div
              style={{
                marginTop: 10,
                fontWeight: 700,
                color: "#5b367c",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Emergency;
