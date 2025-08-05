import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Savignano sul Rubicone",
  canonical: links.servizi["noleggio-bagni-chimici"]["savignano-sul-rubicone"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Savignano sul Rubicone",
  locationNames: { label: "Savignano sul Rubicone", href: "savignano-sul-rubicone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
