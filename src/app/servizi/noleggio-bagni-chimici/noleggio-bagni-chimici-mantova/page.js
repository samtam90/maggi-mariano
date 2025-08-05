import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Mantova",
  canonical: links.servizi["noleggio-bagni-chimici"]["mantova"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Mantova",
  locationNames: { label: "Mantova", href: "mantova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["mantova"],
      name: "Mantova",
  }),
});
