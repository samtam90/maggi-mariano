import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Verghereto",
  canonical: links.servizi["noleggio-bagni-chimici"]["verghereto"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Verghereto",
  locationNames: { label: "Verghereto", href: "verghereto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
