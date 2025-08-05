import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Cosenza",
  canonical: links.servizi["frantoio-mobile-inerti"]["cosenza"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Cosenza",
  locationNames: { label: "Cosenza", href: "cosenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["cosenza"],
      name: "Cosenza",
  }),
});
