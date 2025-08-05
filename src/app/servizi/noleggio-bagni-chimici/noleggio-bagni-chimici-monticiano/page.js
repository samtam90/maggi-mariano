import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Monticiano",
  canonical: links.servizi["noleggio-bagni-chimici"]["monticiano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Monticiano",
  locationNames: { label: "Monticiano", href: "monticiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
