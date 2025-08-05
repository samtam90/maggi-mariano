import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Città della Pieve",
  canonical: links.servizi["frantoio-mobile-inerti"]["citta-della-pieve"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Città della Pieve",
  locationNames: { label: "Città della Pieve", href: "citta-della-pieve" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
