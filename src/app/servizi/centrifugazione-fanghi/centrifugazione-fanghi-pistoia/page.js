import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Pistoia",
  canonical: links.servizi["centrifugazione-fanghi"]["pistoia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Pistoia",
  locationNames: { label: "Pistoia", href: "pistoia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["pistoia"],
      name: "Pistoia",
  }),
});
