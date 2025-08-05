import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Poggibonsi",
  canonical: links.servizi["frantoio-mobile-inerti"]["poggibonsi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Poggibonsi",
  locationNames: { label: "Poggibonsi", href: "poggibonsi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
