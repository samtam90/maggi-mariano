import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Collazzone",
  canonical: links.servizi["frantoio-mobile-inerti"]["collazzone"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Collazzone",
  locationNames: { label: "Collazzone", href: "collazzone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
