import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Civitella di Romagna",
  canonical: links.servizi["noleggio-bagni-chimici"]["civitella-di-romagna"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Civitella di Romagna",
  locationNames: { label: "Civitella di Romagna", href: "civitella-di-romagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
