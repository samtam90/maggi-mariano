import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Colle di Val d'Elsa",
  canonical: links.servizi["noleggio-bagni-chimici"]["colle-di-val-d-elsa"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Colle di Val d'Elsa",
  locationNames: { label: "Colle di Val d'Elsa", href: "colle-di-val-d-elsa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
