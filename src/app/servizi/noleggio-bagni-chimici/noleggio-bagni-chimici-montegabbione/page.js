import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montegabbione",
  canonical: links.servizi["noleggio-bagni-chimici"]["montegabbione"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Montegabbione",
  locationNames: { label: "Montegabbione", href: "montegabbione" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
