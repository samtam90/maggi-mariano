import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Messina",
  canonical: links.servizi["noleggio-bagni-chimici"]["messina"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Messina",
  locationNames: { label: "Messina", href: "messina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["messina"],
      name: "Messina",
  }),
});
