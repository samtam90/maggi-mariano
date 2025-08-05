import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Sassari",
  canonical: links.servizi["centrifugazione-fanghi"]["sassari"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Sassari",
  locationNames: { label: "Sassari", href: "sassari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["sassari"],
      name: "Sassari",
  }),
});
