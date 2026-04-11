// ============================================================
// CONFIGURAÇÃO DO DR — edite aqui para personalizar o site
// ============================================================
import didi from "../assets/didi.jpg";
export const doctor = {
  name: "Dr. Lucas Coracinni",
  firstName: "Lucas",
  lastName: "Coracinni",
  initials: "LC",
  crm: "RQE:94841 | CRM:182.379 | TEOT:17031",
  specialty: "Ortopedia e Traumatologia",
  subspecialties: "Cirurgias do Joelho",
  clinic: "Clínica Cor",
  city: "Ribeirão Preto, SP",
  website: "drmendes.com.br",
  photo: didi,
};

export const links = [
  {
    id: "agenda",
    label: "Agendar Consulta",
    description: "Particular · Convênios selecionados",
    href: "https://wa.me/5511999999999",
    primary: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    description: "Dúvidas e retornos rápidos",
    href: "https://wa.me/5511999999999",
    primary: false,
  },
  {
    id: "facebook",
    label: "Facebook",
    description: "Siga no Facebook",
    href: "https://drmendes.com.br/portfolio",
    primary: false,
  },
  {
    id: "instagram",
    label: "Instagram",
    description: "@lucascoracini",
    href: "https://www.instagram.com/lucascoracini/",
    primary: false,
  },
  {
    id: "artigos",
    label: "Artigos Científicos",
    description: "Publicações e pesquisas (Lattes)",
    href: "http://lattes.cnpq.br/",
    primary: false,
  },
  {
    id: "localizacao",
    label: "Endereço & Localização",
    description: "Clínica Cor · São Paulo, SP",
    href: "https://maps.google.com",
    primary: false,
  },
];

export const socials = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/lucascoracini/",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/drmendes",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/5511999999999",
  },
  { id: "facebook", label: "Facebook", href: "https://facebook.com/drmendes" },
  { id: "email", label: "Email", href: "mailto:drmendes@gmail.com" },
];
