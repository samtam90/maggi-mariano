import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Siena",
  canonical: links.servizi["pulizia-fognature"]["siena"],
});
export default withBaseProps({
  title: "Pulizia fognature Siena",
  locationNames: { label: "Siena", href: "siena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
