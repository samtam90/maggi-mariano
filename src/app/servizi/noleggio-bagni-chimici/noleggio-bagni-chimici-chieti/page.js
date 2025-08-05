import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Chieti",
  canonical: links.servizi["noleggio-bagni-chimici"]["chieti"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Chieti",
  locationNames: { label: "Chieti", href: "chieti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["chieti"],
      name: "Chieti",
  }),
});
