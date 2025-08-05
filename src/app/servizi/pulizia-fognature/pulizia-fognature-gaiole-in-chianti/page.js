import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Gaiole in Chianti",
  canonical: links.servizi["pulizia-fognature"]["gaiole-in-chianti"],
});
export default withBaseProps({
  title: "Pulizia fognature Gaiole in Chianti",
  locationNames: { label: "Gaiole in Chianti", href: "gaiole-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
