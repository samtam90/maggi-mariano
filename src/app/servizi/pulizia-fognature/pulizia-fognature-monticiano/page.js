import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Monticiano",
  canonical: links.servizi["pulizia-fognature"]["monticiano"],
});
export default withBaseProps({
  title: "Pulizia fognature Monticiano",
  locationNames: { label: "Monticiano", href: "monticiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
