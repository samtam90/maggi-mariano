import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Trequanda",
  canonical: links.servizi["noleggio-bagni-chimici"]["trequanda"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Trequanda",
  locationNames: { label: "Trequanda", href: "trequanda" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
