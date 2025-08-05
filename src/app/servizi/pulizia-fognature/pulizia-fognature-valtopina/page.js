import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Valtopina",
  canonical: links.servizi["pulizia-fognature"]["valtopina"],
});
export default withBaseProps({
  title: "Pulizia fognature Valtopina",
  locationNames: { label: "Valtopina", href: "valtopina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
