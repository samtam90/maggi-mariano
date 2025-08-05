import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Lisciano Niccone",
  canonical: links.servizi["pulizia-fognature"]["lisciano-niccone"],
});
export default withBaseProps({
  title: "Pulizia fognature Lisciano Niccone",
  locationNames: { label: "Lisciano Niccone", href: "lisciano-niccone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
