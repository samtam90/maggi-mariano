import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Venezia",
  canonical: links.servizi["pulizia-fognature"]["venezia"],
});
export default withBaseProps({
  title: "Pulizia fognature Venezia",
  locationNames: { label: "Venezia", href: "venezia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["venezia"],
      name: "Venezia",
  }),
});
