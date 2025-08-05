import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montelupo Fiorentino",
  canonical: links.servizi["noleggio-bagni-chimici"]["montelupo-fiorentino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Montelupo Fiorentino",
  locationNames: { label: "Montelupo Fiorentino", href: "montelupo-fiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
