import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Umbertide",
  canonical: links.servizi["noleggio-bagni-chimici"]["umbertide"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Umbertide",
  locationNames: { label: "Umbertide", href: "umbertide" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
