import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rapolano Terme",
  canonical: links.servizi["noleggio-bagni-chimici"]["rapolano-terme"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Rapolano Terme",
  locationNames: { label: "Rapolano Terme", href: "rapolano-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
