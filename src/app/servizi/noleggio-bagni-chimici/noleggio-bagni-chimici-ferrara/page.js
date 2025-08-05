import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ferrara",
  canonical: links.servizi["noleggio-bagni-chimici"]["ferrara"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Ferrara",
  locationNames: { label: "Ferrara", href: "ferrara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["ferrara"],
      name: "Ferrara",
  }),
});
