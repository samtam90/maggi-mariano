import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bergamo",
  canonical: links.servizi["noleggio-bagni-chimici"]["bergamo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Bergamo",
  locationNames: { label: "Bergamo", href: "bergamo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["bergamo"],
      name: "Bergamo",
  }),
});
