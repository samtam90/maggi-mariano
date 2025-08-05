import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Poppi",
  canonical: links.servizi["disidratazione-fanghi"]["poppi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Poppi",
  locationNames: { label: "Poppi", href: "poppi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
