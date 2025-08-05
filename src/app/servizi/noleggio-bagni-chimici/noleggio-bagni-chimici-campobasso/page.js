import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Campobasso",
  canonical: links.servizi["noleggio-bagni-chimici"]["campobasso"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Campobasso",
  locationNames: { label: "Campobasso", href: "campobasso" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["campobasso"],
      name: "Campobasso",
  }),
});
