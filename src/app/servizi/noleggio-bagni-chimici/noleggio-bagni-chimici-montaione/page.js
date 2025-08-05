import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montaione",
  canonical: links.servizi["noleggio-bagni-chimici"]["montaione"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Montaione",
  locationNames: { label: "Montaione", href: "montaione" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
