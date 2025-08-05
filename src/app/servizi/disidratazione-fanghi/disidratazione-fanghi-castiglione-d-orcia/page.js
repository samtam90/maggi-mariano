import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Castiglione d'Orcia",
  canonical: links.servizi["disidratazione-fanghi"]["castiglione-d-orcia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Castiglione d'Orcia",
  locationNames: { label: "Castiglione d'Orcia", href: "castiglione-d-orcia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
