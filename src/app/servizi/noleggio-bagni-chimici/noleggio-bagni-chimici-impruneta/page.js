import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Impruneta",
  canonical: links.servizi["noleggio-bagni-chimici"]["impruneta"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Impruneta",
  locationNames: { label: "Impruneta", href: "impruneta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
