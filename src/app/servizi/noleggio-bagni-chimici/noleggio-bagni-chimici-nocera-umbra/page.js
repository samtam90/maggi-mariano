import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Nocera Umbra",
  canonical: links.servizi["noleggio-bagni-chimici"]["nocera-umbra"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Nocera Umbra",
  locationNames: { label: "Nocera Umbra", href: "nocera-umbra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
