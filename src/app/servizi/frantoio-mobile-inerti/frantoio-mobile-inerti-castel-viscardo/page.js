import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Castel Viscardo",
  canonical: links.servizi["frantoio-mobile-inerti"]["castel-viscardo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Castel Viscardo",
  locationNames: { label: "Castel Viscardo", href: "castel-viscardo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
