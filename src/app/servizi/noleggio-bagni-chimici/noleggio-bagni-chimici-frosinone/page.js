import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Frosinone",
  canonical: links.servizi["noleggio-bagni-chimici"]["frosinone"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Frosinone",
  locationNames: { label: "Frosinone", href: "frosinone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["frosinone"],
      name: "Frosinone",
  }),
});
