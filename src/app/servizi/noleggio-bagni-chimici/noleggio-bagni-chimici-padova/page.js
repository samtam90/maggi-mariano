import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Padova",
  canonical: links.servizi["noleggio-bagni-chimici"]["padova"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Padova",
  locationNames: { label: "Padova", href: "padova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["padova"],
      name: "Padova",
  }),
});
