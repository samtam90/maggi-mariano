import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Palermo",
  canonical: links.servizi["noleggio-bagni-chimici"]["palermo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Palermo",
  locationNames: { label: "Palermo", href: "palermo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["palermo"],
      name: "Palermo",
  }),
});
