import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pesaro-Urbino",
  canonical: links.servizi["noleggio-bagni-chimici"]["pesaro-urbino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Pesaro-Urbino",
  locationNames: { label: "Pesaro-Urbino", href: "pesaro-urbino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["pesaro-urbino"],
      name: "Pesaro-Urbino",
  }),
});
