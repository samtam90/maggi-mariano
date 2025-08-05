import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Verona",
  canonical: links.servizi["noleggio-bagni-chimici"]["verona"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Verona",
  locationNames: { label: "Verona", href: "verona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["verona"],
      name: "Verona",
  }),
});
