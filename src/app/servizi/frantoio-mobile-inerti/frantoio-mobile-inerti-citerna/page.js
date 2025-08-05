import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Citerna",
  canonical: links.servizi["frantoio-mobile-inerti"]["citerna"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Citerna",
  locationNames: { label: "Citerna", href: "citerna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
