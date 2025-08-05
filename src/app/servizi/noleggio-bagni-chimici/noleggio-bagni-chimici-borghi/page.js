import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Borghi",
  canonical: links.servizi["noleggio-bagni-chimici"]["borghi"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Borghi",
  locationNames: { label: "Borghi", href: "borghi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
