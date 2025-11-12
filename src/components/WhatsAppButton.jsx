import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "254746994171"; 
  const preFilledText = "I visited your portfolio and I'm quite fascinated and would like to talk more";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(preFilledText)}`}
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "#fff",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 1000,
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
