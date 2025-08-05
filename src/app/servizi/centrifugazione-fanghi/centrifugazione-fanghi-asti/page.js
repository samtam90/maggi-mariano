import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Asti",
  canonical: links.servizi["centrifugazione-fanghi"]["asti"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Asti",
  locationNames: { label: "Asti", href: "asti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["asti"],
      name: "Asti",
  }),
});
