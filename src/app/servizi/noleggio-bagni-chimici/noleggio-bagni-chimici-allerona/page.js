import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Allerona",
  canonical: links.servizi["noleggio-bagni-chimici"]["allerona"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Allerona",
  locationNames: { label: "Allerona", href: "allerona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
