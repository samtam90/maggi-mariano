import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Barberino Tavarnelle",
  canonical: links.servizi["noleggio-bagni-chimici"]["barberino-tavarnelle"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Barberino Tavarnelle",
  locationNames: { label: "Barberino Tavarnelle", href: "barberino-tavarnelle" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
