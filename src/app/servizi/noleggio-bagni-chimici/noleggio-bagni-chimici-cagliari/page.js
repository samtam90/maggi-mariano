import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cagliari",
  canonical: links.servizi["noleggio-bagni-chimici"]["cagliari"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Cagliari",
  locationNames: { label: "Cagliari", href: "cagliari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["cagliari"],
      name: "Cagliari",
  }),
});
