import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Valtopina",
  canonical: links.servizi["noleggio-bagni-chimici"]["valtopina"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Valtopina",
  locationNames: { label: "Valtopina", href: "valtopina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
