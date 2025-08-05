import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Laterina",
  canonical: links.servizi["noleggio-bagni-chimici"]["laterina"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Laterina",
  locationNames: { label: "Laterina", href: "laterina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
