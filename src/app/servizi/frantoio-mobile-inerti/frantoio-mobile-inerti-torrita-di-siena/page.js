import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Torrita di Siena",
  canonical: links.servizi["frantoio-mobile-inerti"]["torrita-di-siena"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Torrita di Siena",
  locationNames: { label: "Torrita di Siena", href: "torrita-di-siena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
