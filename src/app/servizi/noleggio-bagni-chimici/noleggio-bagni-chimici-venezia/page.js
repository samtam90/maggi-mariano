import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Venezia",
  canonical: links.servizi["noleggio-bagni-chimici"]["venezia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Venezia",
  locationNames: { label: "Venezia", href: "venezia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["venezia"],
      name: "Venezia",
  }),
});
