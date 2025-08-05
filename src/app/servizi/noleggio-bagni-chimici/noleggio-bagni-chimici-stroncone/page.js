import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Stroncone",
  canonical: links.servizi["noleggio-bagni-chimici"]["stroncone"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Stroncone",
  locationNames: { label: "Stroncone", href: "stroncone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
