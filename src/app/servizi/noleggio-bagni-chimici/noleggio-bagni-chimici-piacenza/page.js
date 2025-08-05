import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Piacenza",
  canonical: links.servizi["noleggio-bagni-chimici"]["piacenza"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Piacenza",
  locationNames: { label: "Piacenza", href: "piacenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["piacenza"],
      name: "Piacenza",
  }),
});
