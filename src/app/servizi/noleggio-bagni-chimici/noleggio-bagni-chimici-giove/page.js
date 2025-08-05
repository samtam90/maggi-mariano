import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Giove",
  canonical: links.servizi["noleggio-bagni-chimici"]["giove"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Giove",
  locationNames: { label: "Giove", href: "giove" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
