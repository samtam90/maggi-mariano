import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Narni",
  canonical: links.servizi["noleggio-bagni-chimici"]["narni"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Narni",
  locationNames: { label: "Narni", href: "narni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
