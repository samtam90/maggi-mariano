import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Fermo",
  canonical: links.servizi["noleggio-bagni-chimici"]["fermo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Fermo",
  locationNames: { label: "Fermo", href: "fermo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["fermo"],
      name: "Fermo",
  }),
});
