import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Caprese Michelangelo",
  canonical: links.servizi["noleggio-bagni-chimici"]["caprese-michelangelo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Caprese Michelangelo",
  locationNames: { label: "Caprese Michelangelo", href: "caprese-michelangelo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
