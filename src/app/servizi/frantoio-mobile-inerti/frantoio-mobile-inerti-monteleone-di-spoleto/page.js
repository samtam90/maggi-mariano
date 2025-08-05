import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Monteleone di Spoleto",
  canonical: links.servizi["frantoio-mobile-inerti"]["monteleone-di-spoleto"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Monteleone di Spoleto",
  locationNames: { label: "Monteleone di Spoleto", href: "monteleone-di-spoleto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
