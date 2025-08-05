import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Treviso",
  canonical: links.servizi["noleggio-bagni-chimici"]["treviso"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Treviso",
  locationNames: { label: "Treviso", href: "treviso" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["treviso"],
      name: "Treviso",
  }),
});
