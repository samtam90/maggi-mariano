import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montecchio",
  canonical: links.servizi["noleggio-bagni-chimici"]["montecchio"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Montecchio",
  locationNames: { label: "Montecchio", href: "montecchio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
