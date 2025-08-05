import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montepulciano",
  canonical: links.servizi["noleggio-bagni-chimici"]["montepulciano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Montepulciano",
  locationNames: { label: "Montepulciano", href: "montepulciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
