import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Rovigo",
  canonical: links.servizi["centrifugazione-fanghi"]["rovigo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Rovigo",
  locationNames: { label: "Rovigo", href: "rovigo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["rovigo"],
      name: "Rovigo",
  }),
});
