import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sogliano al Rubicone",
  canonical: links.servizi["noleggio-bagni-chimici"]["sogliano-al-rubicone"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Sogliano al Rubicone",
  locationNames: { label: "Sogliano al Rubicone", href: "sogliano-al-rubicone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
