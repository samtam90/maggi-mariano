import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cerreto Guidi",
  canonical: links.servizi["noleggio-bagni-chimici"]["cerreto-guidi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Cerreto Guidi",
  locationNames: { label: "Cerreto Guidi", href: "cerreto-guidi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
