import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Trapani",
  canonical: links.servizi["pulizia-fognature"]["trapani"],
});
export default withBaseProps({
  title: "Pulizia fognature Trapani",
  locationNames: { label: "Trapani", href: "trapani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["trapani"],
      name: "Trapani",
  }),
});
