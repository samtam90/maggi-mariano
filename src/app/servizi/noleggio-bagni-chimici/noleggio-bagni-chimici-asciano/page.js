import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Asciano",
  canonical: links.servizi["noleggio-bagni-chimici"]["asciano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Asciano",
  locationNames: { label: "Asciano", href: "asciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
