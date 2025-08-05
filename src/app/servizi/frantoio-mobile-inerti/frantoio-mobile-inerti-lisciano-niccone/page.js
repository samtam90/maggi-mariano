import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Lisciano Niccone",
  canonical: links.servizi["frantoio-mobile-inerti"]["lisciano-niccone"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Lisciano Niccone",
  locationNames: { label: "Lisciano Niccone", href: "lisciano-niccone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
