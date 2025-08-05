import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Montepulciano",
  canonical: links.servizi["frantoio-mobile-inerti"]["montepulciano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Montepulciano",
  locationNames: { label: "Montepulciano", href: "montepulciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
