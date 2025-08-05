import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Catanzaro",
  canonical: links.servizi["noleggio-bagni-chimici"]["catanzaro"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Catanzaro",
  locationNames: { label: "Catanzaro", href: "catanzaro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["catanzaro"],
      name: "Catanzaro",
  }),
});
