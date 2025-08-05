import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Civitella in Valdichiana",
  canonical: links.servizi["noleggio-bagni-chimici"]["civitella-in-valdichiana"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Civitella in Valdichiana",
  locationNames: { label: "Civitella in Valdichiana", href: "civitella-in-valdichiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
