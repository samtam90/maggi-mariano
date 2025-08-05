import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lecco",
  canonical: links.servizi["noleggio-bagni-chimici"]["lecco"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Lecco",
  locationNames: { label: "Lecco", href: "lecco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["lecco"],
      name: "Lecco",
  }),
});
