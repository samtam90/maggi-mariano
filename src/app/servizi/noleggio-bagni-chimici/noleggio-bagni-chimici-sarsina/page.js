import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sarsina",
  canonical: links.servizi["noleggio-bagni-chimici"]["sarsina"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Sarsina",
  locationNames: { label: "Sarsina", href: "sarsina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
