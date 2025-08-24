import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "",
    company: "RT Berlin",
    region: "Colombia",
    description:
      "Responsable del manejo de caja registradora y medios de pago. Encargado de la atención al cliente, control de inventario y apoyo en la organización de productos.",
    technologies: [
      "Atencion al cliente",
      "Gestion de caja",
      "Inventario",
      
    ],
  },
  {
    title: "Vendedor",
    company: "Tillas-sport",
    region: "Colombia",
    description:
      "Gestión de ventas mediante el sistema XXX, asesoría personalizada a clientes y cumplimiento de objetivos comerciales. Uso de herramientas digitales para el seguimiento de ventas.",
    technologies: [
      "Ventas",
      "sistema desktok",
      "Servicio al cliente",
      
    ],
  },
];
export type WorkItem = (typeof work)[number];

