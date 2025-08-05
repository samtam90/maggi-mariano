import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Nuoro",
  canonical: links.servizi["noleggio-bagni-chimici"]["nuoro"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Nuoro",
  locationNames: { label: "Nuoro", href: "nuoro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["nuoro"],
      name: "Nuoro",
  }),
});
