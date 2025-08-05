import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Trapani",
  canonical: links.servizi["centrifugazione-fanghi"]["trapani"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Trapani",
  locationNames: { label: "Trapani", href: "trapani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["trapani"],
      name: "Trapani",
  }),
});
