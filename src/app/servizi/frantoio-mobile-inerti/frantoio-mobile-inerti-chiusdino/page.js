import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Chiusdino",
  canonical: links.servizi["frantoio-mobile-inerti"]["chiusdino"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Chiusdino",
  locationNames: { label: "Chiusdino", href: "chiusdino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
