import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Como",
  canonical: links.servizi["disidratazione-fanghi"]["como"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Como",
  locationNames: { label: "Como", href: "como" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["como"],
      name: "Como",
  }),
});
