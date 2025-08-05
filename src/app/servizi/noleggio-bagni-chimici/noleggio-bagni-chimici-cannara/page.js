import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cannara",
  canonical: links.servizi["noleggio-bagni-chimici"]["cannara"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Cannara",
  locationNames: { label: "Cannara", href: "cannara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
