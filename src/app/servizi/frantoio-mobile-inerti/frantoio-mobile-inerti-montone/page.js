import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Montone",
  canonical: links.servizi["frantoio-mobile-inerti"]["montone"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Montone",
  locationNames: { label: "Montone", href: "montone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
