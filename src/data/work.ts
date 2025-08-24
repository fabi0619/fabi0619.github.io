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
    title: "Cajero",
    company: "RP BERLIN",
    region: "Colombia - United States",
    description:
      "Responsable del manejo de caja registradora y medios de pago. Encargado de la atención al cliente, control de inventario y apoyo en la organización de productos.",
      technologies: [
      "Web Development",
      "Creative Design",
      "Digital Solutions",
      "Problem Solving",
    ],
  },
];

export type WorkItem = (typeof work)[number];

