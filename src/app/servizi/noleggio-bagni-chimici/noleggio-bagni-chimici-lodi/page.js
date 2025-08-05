import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lodi",
  canonical: links.servizi["noleggio-bagni-chimici"]["lodi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Lodi",
  locationNames: { label: "Lodi", href: "lodi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["lodi"],
      name: "Lodi",
  }),
});
