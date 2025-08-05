import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Bari",
  canonical: links.servizi["centrifugazione-fanghi"]["bari"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Bari",
  locationNames: { label: "Bari", href: "bari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["bari"],
      name: "Bari",
  }),
});
