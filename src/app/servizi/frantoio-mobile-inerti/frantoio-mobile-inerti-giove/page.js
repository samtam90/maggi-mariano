import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Giove",
  canonical: links.servizi["frantoio-mobile-inerti"]["giove"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Giove",
  locationNames: { label: "Giove", href: "giove" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
