import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Guardea",
  canonical: links.servizi["noleggio-bagni-chimici"]["guardea"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Guardea",
  locationNames: { label: "Guardea", href: "guardea" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
