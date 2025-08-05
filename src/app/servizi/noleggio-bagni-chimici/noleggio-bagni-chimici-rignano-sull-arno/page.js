import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rignano sull'Arno",
  canonical: links.servizi["noleggio-bagni-chimici"]["rignano-sull-arno"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Rignano sull'Arno",
  locationNames: { label: "Rignano sull'Arno", href: "rignano-sull-arno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
