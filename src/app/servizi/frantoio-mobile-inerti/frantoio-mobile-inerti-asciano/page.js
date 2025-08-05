import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Asciano",
  canonical: links.servizi["frantoio-mobile-inerti"]["asciano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Asciano",
  locationNames: { label: "Asciano", href: "asciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
