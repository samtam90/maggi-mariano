import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Marradi",
  canonical: links.servizi["frantoio-mobile-inerti"]["marradi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Marradi",
  locationNames: { label: "Marradi", href: "marradi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
