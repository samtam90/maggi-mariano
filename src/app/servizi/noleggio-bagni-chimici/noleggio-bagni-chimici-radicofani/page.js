import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Radicofani",
  canonical: links.servizi["noleggio-bagni-chimici"]["radicofani"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Radicofani",
  locationNames: { label: "Radicofani", href: "radicofani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
