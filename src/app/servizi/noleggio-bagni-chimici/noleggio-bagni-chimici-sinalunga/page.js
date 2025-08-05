import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sinalunga",
  canonical: links.servizi["noleggio-bagni-chimici"]["sinalunga"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Sinalunga",
  locationNames: { label: "Sinalunga", href: "sinalunga" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
