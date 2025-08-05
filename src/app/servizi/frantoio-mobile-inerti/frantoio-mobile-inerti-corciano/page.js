import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Corciano",
  canonical: links.servizi["frantoio-mobile-inerti"]["corciano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Corciano",
  locationNames: { label: "Corciano", href: "corciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
