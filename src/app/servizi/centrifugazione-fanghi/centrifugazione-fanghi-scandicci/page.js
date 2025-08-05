import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Scandicci",
  canonical: links.servizi["centrifugazione-fanghi"]["scandicci"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Scandicci",
  locationNames: { label: "Scandicci", href: "scandicci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
