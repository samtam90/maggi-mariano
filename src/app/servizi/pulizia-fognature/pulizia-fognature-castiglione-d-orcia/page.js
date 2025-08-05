import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Castiglione d'Orcia",
  canonical: links.servizi["pulizia-fognature"]["castiglione-d-orcia"],
});
export default withBaseProps({
  title: "Pulizia fognature Castiglione d'Orcia",
  locationNames: { label: "Castiglione d'Orcia", href: "castiglione-d-orcia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
