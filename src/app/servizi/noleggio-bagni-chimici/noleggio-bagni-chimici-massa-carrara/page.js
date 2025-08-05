import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Massa-Carrara",
  canonical: links.servizi["noleggio-bagni-chimici"]["massa-carrara"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Massa-Carrara",
  locationNames: { label: "Massa-Carrara", href: "massa-carrara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["massa-carrara"],
      name: "Massa-Carrara",
  }),
});
