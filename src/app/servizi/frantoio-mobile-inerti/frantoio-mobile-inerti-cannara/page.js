import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Cannara",
  canonical: links.servizi["frantoio-mobile-inerti"]["cannara"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Cannara",
  locationNames: { label: "Cannara", href: "cannara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
