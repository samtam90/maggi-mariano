import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Mercato Saraceno",
  canonical: links.servizi["noleggio-bagni-chimici"]["mercato-saraceno"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Mercato Saraceno",
  locationNames: { label: "Mercato Saraceno", href: "mercato-saraceno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
