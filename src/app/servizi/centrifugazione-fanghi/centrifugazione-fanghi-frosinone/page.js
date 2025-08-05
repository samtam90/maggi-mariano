import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Frosinone",
  canonical: links.servizi["centrifugazione-fanghi"]["frosinone"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Frosinone",
  locationNames: { label: "Frosinone", href: "frosinone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["frosinone"],
      name: "Frosinone",
  }),
});
