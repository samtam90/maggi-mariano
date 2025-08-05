import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Lucca",
  canonical: links.servizi["centrifugazione-fanghi"]["lucca"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Lucca",
  locationNames: { label: "Lucca", href: "lucca" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["lucca"],
      name: "Lucca",
  }),
});
