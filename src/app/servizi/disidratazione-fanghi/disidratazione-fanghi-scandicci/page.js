import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Scandicci",
  canonical: links.servizi["disidratazione-fanghi"]["scandicci"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Scandicci",
  locationNames: { label: "Scandicci", href: "scandicci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
