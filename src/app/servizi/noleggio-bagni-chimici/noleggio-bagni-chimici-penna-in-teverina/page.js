import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Penna in Teverina",
  canonical: links.servizi["noleggio-bagni-chimici"]["penna-in-teverina"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Penna in Teverina",
  locationNames: { label: "Penna in Teverina", href: "penna-in-teverina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
