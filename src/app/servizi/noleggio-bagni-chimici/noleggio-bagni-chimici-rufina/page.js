import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rufina",
  canonical: links.servizi["noleggio-bagni-chimici"]["rufina"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Rufina",
  locationNames: { label: "Rufina", href: "rufina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
