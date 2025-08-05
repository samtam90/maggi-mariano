import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Castiglione del Lago",
  canonical: links.servizi["disidratazione-fanghi"]["castiglione-del-lago"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Castiglione del Lago",
  locationNames: { label: "Castiglione del Lago", href: "castiglione-del-lago" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
