import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "916282291058"; 

  const message = encodeURIComponent(
    "Hello OMI Holidays! 👋\n\nI would like to enquire about a Kerala holiday package.\n\nPlease share the available packages and details."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with OMI Holidays on WhatsApp"
    >
      <MessageCircle size={25} strokeWidth={2} />
      <span className="whatsapp-text">Chat with us</span>
    </a>
  );
}