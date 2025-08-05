import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Chieti",
  canonical: links.servizi["pulizia-fognature"]["chieti"],
});
export default withBaseProps({
  title: "Pulizia fognature Chieti",
  locationNames: { label: "Chieti", href: "chieti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["chieti"],
      name: "Chieti",
  }),
});
