import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Piancastagnaio",
  canonical: links.servizi["disidratazione-fanghi"]["piancastagnaio"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Piancastagnaio",
  locationNames: { label: "Piancastagnaio", href: "piancastagnaio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
