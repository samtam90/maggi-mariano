import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Torino",
  canonical: links.servizi["noleggio-bagni-chimici"]["torino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Torino",
  locationNames: { label: "Torino", href: "torino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["torino"],
      name: "Torino",
  }),
});
