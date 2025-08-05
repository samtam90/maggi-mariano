import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castrocaro Terme e Terra del Sole",
  canonical: links.servizi["noleggio-bagni-chimici"]["castrocaro-terme-e-terra-del-sole"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Castrocaro Terme e Terra del Sole",
  locationNames: { label: "Castrocaro Terme e Terra del Sole", href: "castrocaro-terme-e-terra-del-sole" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
