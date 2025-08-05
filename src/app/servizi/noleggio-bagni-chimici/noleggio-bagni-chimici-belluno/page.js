import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Belluno",
  canonical: links.servizi["noleggio-bagni-chimici"]["belluno"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Belluno",
  locationNames: { label: "Belluno", href: "belluno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["belluno"],
      name: "Belluno",
  }),
});
