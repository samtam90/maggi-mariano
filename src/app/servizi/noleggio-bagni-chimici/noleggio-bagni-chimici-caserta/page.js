import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Caserta",
  canonical: links.servizi["noleggio-bagni-chimici"]["caserta"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Caserta",
  locationNames: { label: "Caserta", href: "caserta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["caserta"],
      name: "Caserta",
  }),
});
