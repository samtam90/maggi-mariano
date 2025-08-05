import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montefalco",
  canonical: links.servizi["noleggio-bagni-chimici"]["montefalco"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Montefalco",
  locationNames: { label: "Montefalco", href: "montefalco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
