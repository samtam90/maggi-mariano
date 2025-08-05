import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Gorizia",
  canonical: links.servizi["frantoio-mobile-inerti"]["gorizia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Gorizia",
  locationNames: { label: "Gorizia", href: "gorizia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["gorizia"],
      name: "Gorizia",
  }),
});
