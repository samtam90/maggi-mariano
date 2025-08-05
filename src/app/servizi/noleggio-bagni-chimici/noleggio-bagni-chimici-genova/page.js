import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Genova",
  canonical: links.servizi["noleggio-bagni-chimici"]["genova"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Genova",
  locationNames: { label: "Genova", href: "genova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["genova"],
      name: "Genova",
  }),
});
