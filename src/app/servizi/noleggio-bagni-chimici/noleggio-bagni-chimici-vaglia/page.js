import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vaglia",
  canonical: links.servizi["noleggio-bagni-chimici"]["vaglia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Vaglia",
  locationNames: { label: "Vaglia", href: "vaglia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
