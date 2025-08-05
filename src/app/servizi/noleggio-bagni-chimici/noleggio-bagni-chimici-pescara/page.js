import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pescara",
  canonical: links.servizi["noleggio-bagni-chimici"]["pescara"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Pescara",
  locationNames: { label: "Pescara", href: "pescara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["pescara"],
      name: "Pescara",
  }),
});
