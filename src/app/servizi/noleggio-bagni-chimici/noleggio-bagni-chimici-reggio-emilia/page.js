import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Reggio Emilia",
  canonical: links.servizi["noleggio-bagni-chimici"]["reggio-emilia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Reggio Emilia",
  locationNames: { label: "Reggio Emilia", href: "reggio-emilia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["reggio-emilia"],
      name: "Reggio Emilia",
  }),
});
