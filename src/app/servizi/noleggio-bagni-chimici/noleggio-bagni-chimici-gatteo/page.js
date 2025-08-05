import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Gatteo",
  canonical: links.servizi["noleggio-bagni-chimici"]["gatteo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Gatteo",
  locationNames: { label: "Gatteo", href: "gatteo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
