import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Rapolano Terme",
  canonical: links.servizi["centrifugazione-fanghi"]["rapolano-terme"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Rapolano Terme",
  locationNames: { label: "Rapolano Terme", href: "rapolano-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
