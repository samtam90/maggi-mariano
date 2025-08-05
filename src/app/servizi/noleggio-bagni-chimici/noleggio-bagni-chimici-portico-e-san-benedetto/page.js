import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Portico e San Benedetto",
  canonical: links.servizi["noleggio-bagni-chimici"]["portico-e-san-benedetto"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Portico e San Benedetto",
  locationNames: { label: "Portico e San Benedetto", href: "portico-e-san-benedetto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
