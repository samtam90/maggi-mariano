import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Asti",
  canonical: links.servizi["disidratazione-fanghi"]["asti"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Asti",
  locationNames: { label: "Asti", href: "asti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["asti"],
      name: "Asti",
  }),
});
