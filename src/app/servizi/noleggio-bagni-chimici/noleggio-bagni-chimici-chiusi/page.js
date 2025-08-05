import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Chiusi",
  canonical: links.servizi["noleggio-bagni-chimici"]["chiusi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Chiusi",
  locationNames: { label: "Chiusi", href: "chiusi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
