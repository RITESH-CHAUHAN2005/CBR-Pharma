import whatsappIcon from "@/assets/whatsapp-icon.png";

const WHATSAPP_NUMBER = "919555559919";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in learning more about CBR Pharma products and services.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 overflow-hidden group"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-full h-full object-cover"
      />
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg top-1/2 -translate-y-1/2">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppButton;
