export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Redes y Cisco Packet Tracer",
    description:
      "Apasionado por el área de redes, con experiencia en el diseño y configuración de topologías de red. Manejo de Cisco Packet Tracer para la simulación de entornos y práctica de protocolos de comunicación. Me interesa la conectividad, seguridad y el aprendizaje constante en infraestructura de redes.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v2H3V3zm0 6h18v2H3V9zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"/></svg>`,
    title: "Asistencia Administrativa",
    description:
      "Cuento con un título en asistencia administrativa, lo que me permite desarrollar habilidades en organización, gestión documental, control de procesos, atención al cliente y soporte en entornos corporativos. Estas competencias complementan mi interés en las tecnologías y fortalecen mi perfil profesional.",
  },
];

export type Skill = (typeof skills)[number];
