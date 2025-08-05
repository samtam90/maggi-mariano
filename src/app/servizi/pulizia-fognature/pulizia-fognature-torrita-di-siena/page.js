import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Torrita di Siena",
  canonical: links.servizi["pulizia-fognature"]["torrita-di-siena"],
});
export default withBaseProps({
  title: "Pulizia fognature Torrita di Siena",
  locationNames: { label: "Torrita di Siena", href: "torrita-di-siena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
