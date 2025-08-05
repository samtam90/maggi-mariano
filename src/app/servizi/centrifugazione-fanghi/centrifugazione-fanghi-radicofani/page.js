import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Radicofani",
  canonical: links.servizi["centrifugazione-fanghi"]["radicofani"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Radicofani",
  locationNames: { label: "Radicofani", href: "radicofani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
