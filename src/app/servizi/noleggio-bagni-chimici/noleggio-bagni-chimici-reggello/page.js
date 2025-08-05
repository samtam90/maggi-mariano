import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Reggello",
  canonical: links.servizi["noleggio-bagni-chimici"]["reggello"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Reggello",
  locationNames: { label: "Reggello", href: "reggello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
