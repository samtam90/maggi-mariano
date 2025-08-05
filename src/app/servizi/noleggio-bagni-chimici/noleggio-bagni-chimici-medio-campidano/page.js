import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Medio Campidano",
  canonical: links.servizi["noleggio-bagni-chimici"]["medio-campidano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Medio Campidano",
  locationNames: { label: "Medio Campidano", href: "medio-campidano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["medio-campidano"],
      name: "Medio Campidano",
  }),
});
