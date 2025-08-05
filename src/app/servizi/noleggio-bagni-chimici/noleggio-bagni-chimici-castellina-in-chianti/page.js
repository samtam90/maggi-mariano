import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castellina in Chianti",
  canonical: links.servizi["noleggio-bagni-chimici"]["castellina-in-chianti"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Castellina in Chianti",
  locationNames: { label: "Castellina in Chianti", href: "castellina-in-chianti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
