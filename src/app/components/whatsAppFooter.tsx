"use client";
import React from "react";
import Image from "next/image";

const WhatsAppFooter: React.FC = () => {
  const whatsappNumber = "923204338215"; // Replace with your WhatsApp number in international format

  return (
    <footer style={footerStyle}>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <Image
          src="/whatsapp-icon.png"
          width={50}
          height={50}
          alt="WhatsApp"
          style={iconStyle}
          className="hover:scale-110 transition-transform duration-200 bg-white rounded-full"
        />
      </a>
    </footer>
  );
};

// Inline styles
const footerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#f1f1f1",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
};

const iconStyle: React.CSSProperties = {
  width: "50px",
  height: "50px",
  transition: "transform 0.3s ease",
};

export default WhatsAppFooter;
