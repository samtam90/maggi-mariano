import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sestino",
  canonical: links.servizi["noleggio-bagni-chimici"]["sestino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Sestino",
  locationNames: { label: "Sestino", href: "sestino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
