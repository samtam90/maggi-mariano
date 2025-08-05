import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Abbadia San Salvatore",
  canonical: links.servizi["noleggio-bagni-chimici"]["abbadia-san-salvatore"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Abbadia San Salvatore",
  locationNames: { label: "Abbadia San Salvatore", href: "abbadia-san-salvatore" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
