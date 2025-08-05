import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rovigo",
  canonical: links.servizi["noleggio-bagni-chimici"]["rovigo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Rovigo",
  locationNames: { label: "Rovigo", href: "rovigo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["rovigo"],
      name: "Rovigo",
  }),
});
