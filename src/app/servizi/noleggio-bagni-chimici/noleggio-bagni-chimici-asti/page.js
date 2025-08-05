import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Asti",
  canonical: links.servizi["noleggio-bagni-chimici"]["asti"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Asti",
  locationNames: { label: "Asti", href: "asti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["asti"],
      name: "Asti",
  }),
});
