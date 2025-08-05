import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ragusa",
  canonical: links.servizi["noleggio-bagni-chimici"]["ragusa"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Ragusa",
  locationNames: { label: "Ragusa", href: "ragusa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["ragusa"],
      name: "Ragusa",
  }),
});
