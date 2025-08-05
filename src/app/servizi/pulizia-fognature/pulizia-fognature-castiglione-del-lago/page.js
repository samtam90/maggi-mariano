import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Castiglione del Lago",
  canonical: links.servizi["pulizia-fognature"]["castiglione-del-lago"],
});
export default withBaseProps({
  title: "Pulizia fognature Castiglione del Lago",
  locationNames: { label: "Castiglione del Lago", href: "castiglione-del-lago" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
