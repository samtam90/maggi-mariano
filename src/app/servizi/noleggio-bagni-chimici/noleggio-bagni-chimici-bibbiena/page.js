import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bibbiena",
  canonical: links.servizi["noleggio-bagni-chimici"]["bibbiena"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Bibbiena",
  locationNames: { label: "Bibbiena", href: "bibbiena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
