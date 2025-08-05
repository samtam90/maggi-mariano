import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Monteroni d'Arbia",
  canonical: links.servizi["pulizia-fognature"]["monteroni-d-arbia"],
});
export default withBaseProps({
  title: "Pulizia fognature Monteroni d'Arbia",
  locationNames: { label: "Monteroni d'Arbia", href: "monteroni-d-arbia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
