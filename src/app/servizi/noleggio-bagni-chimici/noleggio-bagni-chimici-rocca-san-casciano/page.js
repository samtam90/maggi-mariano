import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rocca San Casciano",
  canonical: links.servizi["noleggio-bagni-chimici"]["rocca-san-casciano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Rocca San Casciano",
  locationNames: { label: "Rocca San Casciano", href: "rocca-san-casciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
