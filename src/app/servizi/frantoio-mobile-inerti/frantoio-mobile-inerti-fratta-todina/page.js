import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Fratta Todina",
  canonical: links.servizi["frantoio-mobile-inerti"]["fratta-todina"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Fratta Todina",
  locationNames: { label: "Fratta Todina", href: "fratta-todina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
