import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pistoia",
  canonical: links.servizi["noleggio-bagni-chimici"]["pistoia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Pistoia",
  locationNames: { label: "Pistoia", href: "pistoia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["pistoia"],
      name: "Pistoia",
  }),
});
