import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Castiglione del Lago",
  canonical: links.servizi["centrifugazione-fanghi"]["castiglione-del-lago"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Castiglione del Lago",
  locationNames: { label: "Castiglione del Lago", href: "castiglione-del-lago" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
