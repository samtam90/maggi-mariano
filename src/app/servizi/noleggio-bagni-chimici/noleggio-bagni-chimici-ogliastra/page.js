import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ogliastra",
  canonical: links.servizi["noleggio-bagni-chimici"]["ogliastra"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Ogliastra",
  locationNames: { label: "Ogliastra", href: "ogliastra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["ogliastra"],
      name: "Ogliastra",
  }),
});
