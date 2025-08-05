import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cesenatico",
  canonical: links.servizi["noleggio-bagni-chimici"]["cesenatico"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Cesenatico",
  locationNames: { label: "Cesenatico", href: "cesenatico" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
