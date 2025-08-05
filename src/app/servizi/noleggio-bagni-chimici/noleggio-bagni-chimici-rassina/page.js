import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rassina",
  canonical: links.servizi["noleggio-bagni-chimici"]["rassina"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Rassina",
  locationNames: { label: "Rassina", href: "rassina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
