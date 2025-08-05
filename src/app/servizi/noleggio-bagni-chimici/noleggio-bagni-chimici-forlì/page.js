import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Forlì",
  canonical: links.servizi["noleggio-bagni-chimici"]["forli"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Forlì",
  locationNames: { label: "Forlì", href: "forli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
