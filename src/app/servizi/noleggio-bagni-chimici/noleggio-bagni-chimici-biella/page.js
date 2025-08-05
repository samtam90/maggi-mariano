import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Biella",
  canonical: links.servizi["noleggio-bagni-chimici"]["biella"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Biella",
  locationNames: { label: "Biella", href: "biella" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["biella"],
      name: "Biella",
  }),
});
