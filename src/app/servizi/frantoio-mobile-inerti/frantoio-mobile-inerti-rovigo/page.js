import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Rovigo",
  canonical: links.servizi["frantoio-mobile-inerti"]["rovigo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Rovigo",
  locationNames: { label: "Rovigo", href: "rovigo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["rovigo"],
      name: "Rovigo",
  }),
});
