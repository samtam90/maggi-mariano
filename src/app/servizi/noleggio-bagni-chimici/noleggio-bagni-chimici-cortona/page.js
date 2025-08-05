import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cortona",
  canonical: links.servizi["noleggio-bagni-chimici"]["cortona"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Cortona",
  locationNames: { label: "Cortona", href: "cortona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
