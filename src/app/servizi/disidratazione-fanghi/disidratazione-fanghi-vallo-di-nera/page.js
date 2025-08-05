import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Vallo di Nera",
  canonical: links.servizi["disidratazione-fanghi"]["vallo-di-nera"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Vallo di Nera",
  locationNames: { label: "Vallo di Nera", href: "vallo-di-nera" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
