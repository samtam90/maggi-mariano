import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Santa Sofia",
  canonical: links.servizi["noleggio-bagni-chimici"]["santa-sofia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Santa Sofia",
  locationNames: { label: "Santa Sofia", href: "santa-sofia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
