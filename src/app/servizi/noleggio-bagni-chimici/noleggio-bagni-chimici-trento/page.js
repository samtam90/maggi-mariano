import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Trento",
  canonical: links.servizi["noleggio-bagni-chimici"]["trento"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Trento",
  locationNames: { label: "Trento", href: "trento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["trento"],
      name: "Trento",
  }),
});
