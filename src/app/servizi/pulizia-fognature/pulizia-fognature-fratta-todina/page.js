import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Fratta Todina",
  canonical: links.servizi["pulizia-fognature"]["fratta-todina"],
});
export default withBaseProps({
  title: "Pulizia fognature Fratta Todina",
  locationNames: { label: "Fratta Todina", href: "fratta-todina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
