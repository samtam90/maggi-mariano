import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Costacciaro",
  canonical: links.servizi["frantoio-mobile-inerti"]["costacciaro"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Costacciaro",
  locationNames: { label: "Costacciaro", href: "costacciaro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
