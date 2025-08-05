import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gambassi Terme",
  canonical: links.servizi["noleggio-bagni-chimici"]["gambassi-terme"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Gambassi Terme",
  locationNames: { label: "Gambassi Terme", href: "gambassi-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
