import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Monteroni d'Arbia",
  canonical: links.servizi["frantoio-mobile-inerti"]["monteroni-d-arbia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Monteroni d'Arbia",
  locationNames: { label: "Monteroni d'Arbia", href: "monteroni-d-arbia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
