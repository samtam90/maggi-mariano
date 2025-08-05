import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Chiusdino",
  canonical: links.servizi["pulizia-fognature"]["chiusdino"],
});
export default withBaseProps({
  title: "Pulizia fognature Chiusdino",
  locationNames: { label: "Chiusdino", href: "chiusdino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
