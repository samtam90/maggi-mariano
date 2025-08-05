import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Gaiole in Chianti",
  canonical: links.servizi["frantoio-mobile-inerti"]["gaiole-in-chianti"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Gaiole in Chianti",
  locationNames: { label: "Gaiole in Chianti", href: "gaiole-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
