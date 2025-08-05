import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Vallo di Nera",
  canonical: links.servizi["pulizia-fognature"]["vallo-di-nera"],
});
export default withBaseProps({
  title: "Pulizia fognature Vallo di Nera",
  locationNames: { label: "Vallo di Nera", href: "vallo-di-nera" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
