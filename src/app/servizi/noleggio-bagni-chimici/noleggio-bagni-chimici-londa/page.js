import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Londa",
  canonical: links.servizi["noleggio-bagni-chimici"]["londa"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Londa",
  locationNames: { label: "Londa", href: "londa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
