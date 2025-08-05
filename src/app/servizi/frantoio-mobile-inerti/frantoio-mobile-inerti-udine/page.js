import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Udine",
  canonical: links.servizi["frantoio-mobile-inerti"]["udine"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Udine",
  locationNames: { label: "Udine", href: "udine" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["udine"],
      name: "Udine",
  }),
});
