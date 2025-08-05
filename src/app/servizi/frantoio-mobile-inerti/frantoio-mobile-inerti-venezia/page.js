import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Venezia",
  canonical: links.servizi["frantoio-mobile-inerti"]["venezia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Venezia",
  locationNames: { label: "Venezia", href: "venezia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["venezia"],
      name: "Venezia",
  }),
});
