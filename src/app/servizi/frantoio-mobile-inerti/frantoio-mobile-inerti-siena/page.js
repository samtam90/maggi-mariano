import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Siena",
  canonical: links.servizi["frantoio-mobile-inerti"]["siena"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Siena",
  locationNames: { label: "Siena", href: "siena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
