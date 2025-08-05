import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Foggia",
  canonical: links.servizi["noleggio-bagni-chimici"]["foggia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Foggia",
  locationNames: { label: "Foggia", href: "foggia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["foggia"],
      name: "Foggia",
  }),
});
