import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Prato",
  canonical: links.servizi["noleggio-bagni-chimici"]["prato"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Prato",
  locationNames: { label: "Prato", href: "prato" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["prato"],
      name: "Prato",
  }),
});
