import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Piegaro",
  canonical: links.servizi["noleggio-bagni-chimici"]["piegaro"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Piegaro",
  locationNames: { label: "Piegaro", href: "piegaro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
