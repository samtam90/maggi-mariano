import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Polino",
  canonical: links.servizi["frantoio-mobile-inerti"]["polino"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Polino",
  locationNames: { label: "Polino", href: "polino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
