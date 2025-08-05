import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Signa",
  canonical: links.servizi["noleggio-bagni-chimici"]["signa"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Signa",
  locationNames: { label: "Signa", href: "signa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
