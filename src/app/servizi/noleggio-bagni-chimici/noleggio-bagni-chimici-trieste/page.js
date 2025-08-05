import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Trieste",
  canonical: links.servizi["noleggio-bagni-chimici"]["trieste"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Trieste",
  locationNames: { label: "Trieste", href: "trieste" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["trieste"],
      name: "Trieste",
  }),
});
