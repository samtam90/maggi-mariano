import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Chianciano Terme",
  canonical: links.servizi["noleggio-bagni-chimici"]["chianciano-terme"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Chianciano Terme",
  locationNames: { label: "Chianciano Terme", href: "chianciano-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
