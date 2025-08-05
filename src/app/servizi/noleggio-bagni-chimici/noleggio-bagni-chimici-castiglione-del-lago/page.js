import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castiglione del Lago",
  canonical: links.servizi["noleggio-bagni-chimici"]["castiglione-del-lago"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Castiglione del Lago",
  locationNames: { label: "Castiglione del Lago", href: "castiglione-del-lago" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
