import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gambettola",
  canonical: links.servizi["noleggio-bagni-chimici"]["gambettola"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Gambettola",
  locationNames: { label: "Gambettola", href: "gambettola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
