import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Cetona",
  canonical: links.servizi["frantoio-mobile-inerti"]["cetona"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Cetona",
  locationNames: { label: "Cetona", href: "cetona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
