import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Predappio",
  canonical: links.servizi["noleggio-bagni-chimici"]["predappio"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Predappio",
  locationNames: { label: "Predappio", href: "predappio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
