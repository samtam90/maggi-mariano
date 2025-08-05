import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cesena",
  canonical: links.servizi["noleggio-bagni-chimici"]["cesena"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Cesena",
  locationNames: { label: "Cesena", href: "cesena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
