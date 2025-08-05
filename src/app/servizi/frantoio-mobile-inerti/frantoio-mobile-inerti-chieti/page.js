import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Chieti",
  canonical: links.servizi["frantoio-mobile-inerti"]["chieti"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Chieti",
  locationNames: { label: "Chieti", href: "chieti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["chieti"],
      name: "Chieti",
  }),
});
