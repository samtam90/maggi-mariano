import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Fucecchio",
  canonical: links.servizi["noleggio-bagni-chimici"]["fucecchio"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Fucecchio",
  locationNames: { label: "Fucecchio", href: "fucecchio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
