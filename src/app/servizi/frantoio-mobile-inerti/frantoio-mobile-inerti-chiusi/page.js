import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Chiusi",
  canonical: links.servizi["frantoio-mobile-inerti"]["chiusi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Chiusi",
  locationNames: { label: "Chiusi", href: "chiusi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
