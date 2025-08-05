import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Marciano della Chiana",
  canonical: links.servizi["noleggio-bagni-chimici"]["marciano-della-chiana"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Marciano della Chiana",
  locationNames: { label: "Marciano della Chiana", href: "marciano-della-chiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
