import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bagno di Romagna",
  canonical: links.servizi["noleggio-bagni-chimici"]["bagno-di-romagna"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Bagno di Romagna",
  locationNames: { label: "Bagno di Romagna", href: "bagno-di-romagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
