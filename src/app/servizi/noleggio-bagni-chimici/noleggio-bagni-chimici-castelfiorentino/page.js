import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castelfiorentino",
  canonical: links.servizi["noleggio-bagni-chimici"]["castelfiorentino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Castelfiorentino",
  locationNames: { label: "Castelfiorentino", href: "castelfiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
