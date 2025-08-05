import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cetona",
  canonical: links.servizi["noleggio-bagni-chimici"]["cetona"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Cetona",
  locationNames: { label: "Cetona", href: "cetona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
