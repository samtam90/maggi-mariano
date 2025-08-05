import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Savona",
  canonical: links.servizi["noleggio-bagni-chimici"]["savona"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Savona",
  locationNames: { label: "Savona", href: "savona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["savona"],
      name: "Savona",
  }),
});
