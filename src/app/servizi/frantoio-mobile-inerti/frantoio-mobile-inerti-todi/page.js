import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Todi",
  canonical: links.servizi["frantoio-mobile-inerti"]["todi"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Todi",
  locationNames: { label: "Todi", href: "todi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
