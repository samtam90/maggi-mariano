import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Novara",
  canonical: links.servizi["noleggio-bagni-chimici"]["novara"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Novara",
  locationNames: { label: "Novara", href: "novara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["novara"],
      name: "Novara",
  }),
});
