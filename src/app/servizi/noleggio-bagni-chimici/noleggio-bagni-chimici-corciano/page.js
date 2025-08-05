import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Corciano",
  canonical: links.servizi["noleggio-bagni-chimici"]["corciano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Corciano",
  locationNames: { label: "Corciano", href: "corciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
