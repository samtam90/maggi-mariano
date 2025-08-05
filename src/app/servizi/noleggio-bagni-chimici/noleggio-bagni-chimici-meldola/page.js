import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Meldola",
  canonical: links.servizi["noleggio-bagni-chimici"]["meldola"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Meldola",
  locationNames: { label: "Meldola", href: "meldola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
