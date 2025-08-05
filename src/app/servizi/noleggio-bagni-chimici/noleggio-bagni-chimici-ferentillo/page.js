import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ferentillo",
  canonical: links.servizi["noleggio-bagni-chimici"]["ferentillo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Ferentillo",
  locationNames: { label: "Ferentillo", href: "ferentillo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
