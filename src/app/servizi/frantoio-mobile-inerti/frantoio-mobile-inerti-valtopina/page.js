import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Valtopina",
  canonical: links.servizi["frantoio-mobile-inerti"]["valtopina"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Valtopina",
  locationNames: { label: "Valtopina", href: "valtopina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
