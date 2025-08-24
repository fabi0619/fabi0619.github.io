export const studies = [
  {
    title: "Ingenieria de sistemas",
    institution: "Universidad Santiago de Cali",
    description:
      "Soy estudiante de Ingeniería de Sistemas, con interés en el área de redes y telecomunicaciones. Poseo conocimientos en diseño, configuración y simulación de redes de datos mediante Cisco Packet Tracer, lo que me ha permitido desarrollar competencias prácticas y analíticas.",
    tags: [
      "Algorithms",
      "Data Structures",
      "Operating Systems",
      "Databases",
      "Networking",
    ],
  },
  {
    title: "Tecnico en Asistencia Administrativa",
    institution: "SENA",
    description:
      "Soy Técnico en Asistencia Administrativa, con experiencia en la gestión de documentos, organización de agendas y apoyo en procesos administrativos. Manejo herramientas ofimáticas y brindo soporte en la atención a clientes, coordinación de reuniones y elaboración de informes, contribuyendo a la eficiencia y organización de la empresa.",
    tags: [
      "Distributed Systems",
      "Cloud Architecture",
      "Testing",
      "Microservices",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

