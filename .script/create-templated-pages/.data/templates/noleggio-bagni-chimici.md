import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici [name]",
  canonical: links.servizi["noleggio-bagni-chimici"]["[path]"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici [name]",
  locationNames: { label: "[name]", href: "[path]" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["[province.path]"],
      name: "[province.name]",
  }),
});
