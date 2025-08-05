import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Sovicille",
  canonical: links.servizi["disidratazione-fanghi"]["sovicille"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Sovicille",
  locationNames: { label: "Sovicille", href: "sovicille" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
