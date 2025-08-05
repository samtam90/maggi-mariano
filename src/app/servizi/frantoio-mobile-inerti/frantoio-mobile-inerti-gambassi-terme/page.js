import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Gambassi Terme",
  canonical: links.servizi["frantoio-mobile-inerti"]["gambassi-terme"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Gambassi Terme",
  locationNames: { label: "Gambassi Terme", href: "gambassi-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
