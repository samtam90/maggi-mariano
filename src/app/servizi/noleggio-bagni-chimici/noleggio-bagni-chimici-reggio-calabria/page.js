import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Reggio Calabria",
  canonical: links.servizi["noleggio-bagni-chimici"]["reggio-calabria"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Reggio Calabria",
  locationNames: { label: "Reggio Calabria", href: "reggio-calabria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["reggio-calabria"],
      name: "Reggio Calabria",
  }),
});
