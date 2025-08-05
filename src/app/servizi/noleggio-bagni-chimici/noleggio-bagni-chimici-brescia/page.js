import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Brescia",
  canonical: links.servizi["noleggio-bagni-chimici"]["brescia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Brescia",
  locationNames: { label: "Brescia", href: "brescia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["brescia"],
      name: "Brescia",
  }),
});
