import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Asciano",
  canonical: links.servizi["pulizia-fognature"]["asciano"],
});
export default withBaseProps({
  title: "Pulizia fognature Asciano",
  locationNames: { label: "Asciano", href: "asciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
