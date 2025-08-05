import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Murlo",
  canonical: links.servizi["noleggio-bagni-chimici"]["murlo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Murlo",
  locationNames: { label: "Murlo", href: "murlo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
