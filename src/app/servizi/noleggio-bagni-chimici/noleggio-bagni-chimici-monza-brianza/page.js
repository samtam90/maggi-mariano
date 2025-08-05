import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Monza Brianza",
  canonical: links.servizi["noleggio-bagni-chimici"]["monza-brianza"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Monza Brianza",
  locationNames: { label: "Monza Brianza", href: "monza-brianza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["monza-brianza"],
      name: "Monza Brianza",
  }),
});
