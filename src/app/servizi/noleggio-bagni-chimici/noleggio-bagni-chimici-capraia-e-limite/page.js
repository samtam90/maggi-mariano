import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Capraia e Limite",
  canonical: links.servizi["noleggio-bagni-chimici"]["capraia-e-limite"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Capraia e Limite",
  locationNames: { label: "Capraia e Limite", href: "capraia-e-limite" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
