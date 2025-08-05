import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Trapani",
  canonical: links.servizi["noleggio-bagni-chimici"]["trapani"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Trapani",
  locationNames: { label: "Trapani", href: "trapani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["trapani"],
      name: "Trapani",
  }),
});
