import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Castiglione del Lago",
  canonical: links.servizi["frantoio-mobile-inerti"]["castiglione-del-lago"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Castiglione del Lago",
  locationNames: { label: "Castiglione del Lago", href: "castiglione-del-lago" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
