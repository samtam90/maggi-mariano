import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Catania",
  canonical: links.servizi["noleggio-bagni-chimici"]["catania"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Catania",
  locationNames: { label: "Catania", href: "catania" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["catania"],
      name: "Catania",
  }),
});
