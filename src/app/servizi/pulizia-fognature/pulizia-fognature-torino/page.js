import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Torino",
  canonical: links.servizi["pulizia-fognature"]["torino"],
});
export default withBaseProps({
  title: "Pulizia fognature Torino",
  locationNames: { label: "Torino", href: "torino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["torino"],
      name: "Torino",
  }),
});
