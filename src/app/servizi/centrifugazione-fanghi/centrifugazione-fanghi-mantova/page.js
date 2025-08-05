import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Mantova",
  canonical: links.servizi["centrifugazione-fanghi"]["mantova"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Mantova",
  locationNames: { label: "Mantova", href: "mantova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["mantova"],
      name: "Mantova",
  }),
});
