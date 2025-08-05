import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Torgiano",
  canonical: links.servizi["frantoio-mobile-inerti"]["torgiano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Torgiano",
  locationNames: { label: "Torgiano", href: "torgiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
