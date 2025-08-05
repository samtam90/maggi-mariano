import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Crotone",
  canonical: links.servizi["frantoio-mobile-inerti"]["crotone"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Crotone",
  locationNames: { label: "Crotone", href: "crotone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["crotone"],
      name: "Crotone",
  }),
});
