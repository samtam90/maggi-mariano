import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Campi Bisenzio",
  canonical: links.servizi["noleggio-bagni-chimici"]["campi-bisenzio"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Campi Bisenzio",
  locationNames: { label: "Campi Bisenzio", href: "campi-bisenzio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
