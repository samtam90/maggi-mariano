import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sovicille",
  canonical: links.servizi["noleggio-bagni-chimici"]["sovicille"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Sovicille",
  locationNames: { label: "Sovicille", href: "sovicille" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
