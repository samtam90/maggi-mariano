import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sesto Fiorentino",
  canonical: links.servizi["noleggio-bagni-chimici"]["sesto-fiorentino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Sesto Fiorentino",
  locationNames: { label: "Sesto Fiorentino", href: "sesto-fiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
