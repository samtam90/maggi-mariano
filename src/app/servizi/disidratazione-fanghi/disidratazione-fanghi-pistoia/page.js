import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Pistoia",
  canonical: links.servizi["disidratazione-fanghi"]["pistoia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Pistoia",
  locationNames: { label: "Pistoia", href: "pistoia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["pistoia"],
      name: "Pistoia",
  }),
});
