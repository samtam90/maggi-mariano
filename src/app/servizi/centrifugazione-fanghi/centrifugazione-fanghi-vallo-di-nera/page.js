import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Vallo di Nera",
  canonical: links.servizi["centrifugazione-fanghi"]["vallo-di-nera"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Vallo di Nera",
  locationNames: { label: "Vallo di Nera", href: "vallo-di-nera" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
