import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Barberino di Mugello",
  canonical: links.servizi["noleggio-bagni-chimici"]["barberino-di-mugello"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Barberino di Mugello",
  locationNames: { label: "Barberino di Mugello", href: "barberino-di-mugello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
