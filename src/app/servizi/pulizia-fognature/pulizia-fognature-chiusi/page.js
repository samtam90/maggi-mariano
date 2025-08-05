import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Chiusi",
  canonical: links.servizi["pulizia-fognature"]["chiusi"],
});
export default withBaseProps({
  title: "Pulizia fognature Chiusi",
  locationNames: { label: "Chiusi", href: "chiusi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
