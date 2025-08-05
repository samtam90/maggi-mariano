import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Poggibonsi",
  canonical: links.servizi["noleggio-bagni-chimici"]["poggibonsi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Poggibonsi",
  locationNames: { label: "Poggibonsi", href: "poggibonsi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
