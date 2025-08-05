import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Agrigento",
  canonical: links.servizi["frantoio-mobile-inerti"]["agrigento"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Agrigento",
  locationNames: { label: "Agrigento", href: "agrigento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["agrigento"],
      name: "Agrigento",
  }),
});
