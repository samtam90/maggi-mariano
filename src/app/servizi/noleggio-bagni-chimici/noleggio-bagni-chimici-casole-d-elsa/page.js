import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Casole d'Elsa",
  canonical: links.servizi["noleggio-bagni-chimici"]["casole-d-elsa"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Casole d'Elsa",
  locationNames: { label: "Casole d'Elsa", href: "casole-d-elsa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
