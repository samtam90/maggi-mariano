import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Valfabbrica",
  canonical: links.servizi["frantoio-mobile-inerti"]["valfabbrica"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Valfabbrica",
  locationNames: { label: "Valfabbrica", href: "valfabbrica" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
