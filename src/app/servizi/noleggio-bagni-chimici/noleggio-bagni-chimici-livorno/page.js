import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Livorno",
  canonical: links.servizi["noleggio-bagni-chimici"]["livorno"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Livorno",
  locationNames: { label: "Livorno", href: "livorno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["livorno"],
      name: "Livorno",
  }),
});
