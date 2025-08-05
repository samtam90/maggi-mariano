import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Premilcuore",
  canonical: links.servizi["frantoio-mobile-inerti"]["premilcuore"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Premilcuore",
  locationNames: { label: "Premilcuore", href: "premilcuore" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
