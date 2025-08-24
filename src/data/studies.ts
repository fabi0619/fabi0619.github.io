export const studies = [
  {
    title: "Ingenieria de sistemas",
    institution: "Universidad Santiago de Cali",
    description:
      "Core CS foundations: data structures, algorithms, operating systems, networking, and databases; team capstone in web systems.",
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

