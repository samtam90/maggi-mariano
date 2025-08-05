import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Rovigo",
  canonical: links.servizi["pulizia-fognature"]["rovigo"],
});
export default withBaseProps({
  title: "Pulizia fognature Rovigo",
  locationNames: { label: "Rovigo", href: "rovigo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["rovigo"],
      name: "Rovigo",
  }),
});
