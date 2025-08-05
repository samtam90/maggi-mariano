import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Mantova",
  canonical: links.servizi["disidratazione-fanghi"]["mantova"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Mantova",
  locationNames: { label: "Mantova", href: "mantova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["mantova"],
      name: "Mantova",
  }),
});
