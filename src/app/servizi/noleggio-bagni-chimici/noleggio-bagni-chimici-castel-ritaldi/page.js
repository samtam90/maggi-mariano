import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castel Ritaldi",
  canonical: links.servizi["noleggio-bagni-chimici"]["castel-ritaldi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Castel Ritaldi",
  locationNames: { label: "Castel Ritaldi", href: "castel-ritaldi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
