import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Salerno",
  canonical: links.servizi["noleggio-bagni-chimici"]["salerno"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Salerno",
  locationNames: { label: "Salerno", href: "salerno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["salerno"],
      name: "Salerno",
  }),
});
