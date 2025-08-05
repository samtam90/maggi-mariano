import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Castiglione d'Orcia",
  canonical: links.servizi["frantoio-mobile-inerti"]["castiglione-d-orcia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Castiglione d'Orcia",
  locationNames: { label: "Castiglione d'Orcia", href: "castiglione-d-orcia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
