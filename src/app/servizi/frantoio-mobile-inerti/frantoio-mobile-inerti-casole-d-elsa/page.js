import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Casole d'Elsa",
  canonical: links.servizi["frantoio-mobile-inerti"]["casole-d-elsa"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Casole d'Elsa",
  locationNames: { label: "Casole d'Elsa", href: "casole-d-elsa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
