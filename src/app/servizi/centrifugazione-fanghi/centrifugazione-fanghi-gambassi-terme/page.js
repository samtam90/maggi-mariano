import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Gambassi Terme",
  canonical: links.servizi["centrifugazione-fanghi"]["gambassi-terme"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Gambassi Terme",
  locationNames: { label: "Gambassi Terme", href: "gambassi-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
