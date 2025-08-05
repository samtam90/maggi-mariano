import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Poggiodomo",
  canonical: links.servizi["noleggio-bagni-chimici"]["poggiodomo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Poggiodomo",
  locationNames: { label: "Poggiodomo", href: "poggiodomo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
