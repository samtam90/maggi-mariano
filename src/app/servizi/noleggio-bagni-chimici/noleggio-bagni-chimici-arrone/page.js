import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Arrone",
  canonical: links.servizi["noleggio-bagni-chimici"]["arrone"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Arrone",
  locationNames: { label: "Arrone", href: "arrone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
