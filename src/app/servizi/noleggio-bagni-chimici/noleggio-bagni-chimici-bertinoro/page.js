import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bertinoro",
  canonical: links.servizi["noleggio-bagni-chimici"]["bertinoro"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Bertinoro",
  locationNames: { label: "Bertinoro", href: "bertinoro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
