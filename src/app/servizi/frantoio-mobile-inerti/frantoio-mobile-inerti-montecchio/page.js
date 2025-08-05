import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Montecchio",
  canonical: links.servizi["frantoio-mobile-inerti"]["montecchio"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Montecchio",
  locationNames: { label: "Montecchio", href: "montecchio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
