import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pienza",
  canonical: links.servizi["noleggio-bagni-chimici"]["pienza"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Pienza",
  locationNames: { label: "Pienza", href: "pienza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
