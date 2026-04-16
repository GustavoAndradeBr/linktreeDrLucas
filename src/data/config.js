// ============================================================
// CONFIGURAÇÃO DO DR — edite aqui para personalizar o site
// ============================================================
import dr from "../assets/DrLucas.jpeg";

const phone = "5516997841185";

const createWhatsAppLink = (message) => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

const messages = {
  consulta: (name) =>
    `Olá, vim pelo site e gostaria de agendar uma consulta com o ${name}.`,

  duvida: () => `Olá, vim pelo site e gostaria de tirar uma dúvida.`,
};
export const doctor = {
  name: "Dr. Lucas Coracini",
  firstName: "Lucas",
  lastName: "Coracini",
  initials: "LC",
  crm: "RQE:94841 | CRM:182.379 | TEOT:17031",
  specialty: "Ortopedia e Traumatologia",
  subspecialties: " Ortopedia Geral e Cirurgia do Joelho",
  city: "Ribeirão Preto, SP",
  website: "https://dr-lucas-coracini.vercel.app/",
  photo: dr,
};

export const links = [
  {
    id: "agenda",
    label: "Agendar Consulta",
    description: "Particular · Convênios selecionados",
    href: null,
    primary: true,
    expandable: true,
    options: [
      {
        label: "Telefone",
        items: [
          { text: "(16) 3234-3280", href: "tel:+551632343280" },
          { text: "(16) 3234-3281", href: "tel:+551632343281" },
        ],
      },
      {
        label: "WhatsApp",
        items: [
          {
            text: "(16) 9 9337-9428",
            href:
              "https://wa.me/5516993379428?text=" +
              encodeURIComponent(messages.consulta(doctor.name)),
          },
        ],
      },
    ],
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    description: "Dúvidas e retornos rápidos",
    href: createWhatsAppLink(messages.duvida()),
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
    id: "localizacao",
    label: "Endereço & Localização",
    description: "CEORT · Ribeirão Preto - SP",
    href: "https://www.google.com/maps/place/R.+Eliseu+Guilherme,+708+-+Jardim+Sumare,+Ribeir%C3%A3o+Preto+-+SP,+14025-020/@-21.1883285,-47.8107814,19z/data=!4m14!1m7!3m6!1s0x94b9bee65140421d:0xf5f139f6d06a7eb7!2sCl%C3%ADnica+de+Ortopedia+Ceort!8m2!3d-21.1882232!4d-47.8103168!16s%2Fg%2F1ptzn995x!3m5!1s0x94b9bee7060d1943:0xcf0ca25abcd09d1f!8m2!3d-21.1883391!4d-47.8104141!16s%2Fg%2F11b8_rj7qy?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D",
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
    href: "https://www.linkedin.com/company/cl%C3%ADnica-ceort/",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/5516997841185?text=Olá%2C%20gostaria%20de%20entrar%20em%20contato%20com%20o%20Dr.%20Lucas%20Coracini.",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/lucas.coracini",
  },
  { id: "email", label: "Email", href: "mailto:lucas_coracini5@hotmail.com" },
];
