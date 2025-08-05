import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cetona",
  canonical: links.servizi["pulizia-fognature"]["cetona"],
});
export default withBaseProps({
  title: "Pulizia fognature Cetona",
  locationNames: { label: "Cetona", href: "cetona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
