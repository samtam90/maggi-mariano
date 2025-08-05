import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Grosseto",
  canonical: links.servizi["noleggio-bagni-chimici"]["grosseto"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Grosseto",
  locationNames: { label: "Grosseto", href: "grosseto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["grosseto"],
      name: "Grosseto",
  }),
});
