import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Monticiano",
  canonical: links.servizi["frantoio-mobile-inerti"]["monticiano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Monticiano",
  locationNames: { label: "Monticiano", href: "monticiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
