import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Siena",
  canonical: links.servizi["noleggio-bagni-chimici"]["siena"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Siena",
  locationNames: { label: "Siena", href: "siena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
