import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bastia Umbra",
  canonical: links.servizi["noleggio-bagni-chimici"]["bastia-umbra"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Bastia Umbra",
  locationNames: { label: "Bastia Umbra", href: "bastia-umbra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
