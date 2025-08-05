import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Novara",
  canonical: links.servizi["disidratazione-fanghi"]["novara"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Novara",
  locationNames: { label: "Novara", href: "novara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["novara"],
      name: "Novara",
  }),
});
