import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ravenna",
  canonical: links.servizi["noleggio-bagni-chimici"]["ravenna"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Ravenna",
  locationNames: { label: "Ravenna", href: "ravenna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["ravenna"],
      name: "Ravenna",
  }),
});
