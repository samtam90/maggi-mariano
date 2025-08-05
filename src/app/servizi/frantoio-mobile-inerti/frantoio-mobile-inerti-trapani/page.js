import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Trapani",
  canonical: links.servizi["frantoio-mobile-inerti"]["trapani"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Trapani",
  locationNames: { label: "Trapani", href: "trapani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["trapani"],
      name: "Trapani",
  }),
});
