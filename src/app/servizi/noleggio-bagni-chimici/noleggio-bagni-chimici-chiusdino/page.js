import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Chiusdino",
  canonical: links.servizi["noleggio-bagni-chimici"]["chiusdino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Chiusdino",
  locationNames: { label: "Chiusdino", href: "chiusdino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
