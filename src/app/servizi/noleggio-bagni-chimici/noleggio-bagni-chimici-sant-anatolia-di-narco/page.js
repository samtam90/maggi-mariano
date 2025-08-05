import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sant'Anatolia di Narco",
  canonical: links.servizi["noleggio-bagni-chimici"]["sant-anatolia-di-narco"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Sant'Anatolia di Narco",
  locationNames: { label: "Sant'Anatolia di Narco", href: "sant-anatolia-di-narco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
