import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Porano",
  canonical: links.servizi["noleggio-bagni-chimici"]["porano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Porano",
  locationNames: { label: "Porano", href: "porano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
