import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Panicale",
  canonical: links.servizi["noleggio-bagni-chimici"]["panicale"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Panicale",
  locationNames: { label: "Panicale", href: "panicale" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
