import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Castellina in Chianti",
  canonical: links.servizi["pulizia-fognature"]["castellina-in-chianti"],
});
export default withBaseProps({
  title: "Pulizia fognature Castellina in Chianti",
  locationNames: { label: "Castellina in Chianti", href: "castellina-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
