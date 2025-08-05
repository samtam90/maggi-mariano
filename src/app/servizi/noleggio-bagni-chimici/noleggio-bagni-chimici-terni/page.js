import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Terni",
  canonical: links.servizi["noleggio-bagni-chimici"]["terni"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Terni",
  locationNames: { label: "Terni", href: "terni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
