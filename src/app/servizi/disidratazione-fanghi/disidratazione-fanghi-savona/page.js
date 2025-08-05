import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Savona",
  canonical: links.servizi["disidratazione-fanghi"]["savona"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Savona",
  locationNames: { label: "Savona", href: "savona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["savona"],
      name: "Savona",
  }),
});
