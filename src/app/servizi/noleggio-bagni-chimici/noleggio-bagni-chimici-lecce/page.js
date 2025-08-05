import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lecce",
  canonical: links.servizi["noleggio-bagni-chimici"]["lecce"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Lecce",
  locationNames: { label: "Lecce", href: "lecce" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["lecce"],
      name: "Lecce",
  }),
});
