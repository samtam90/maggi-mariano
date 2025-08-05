import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Gambassi Terme",
  canonical: links.servizi["disidratazione-fanghi"]["gambassi-terme"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Gambassi Terme",
  locationNames: { label: "Gambassi Terme", href: "gambassi-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
