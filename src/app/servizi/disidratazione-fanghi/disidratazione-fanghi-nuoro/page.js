import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Nuoro",
  canonical: links.servizi["disidratazione-fanghi"]["nuoro"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Nuoro",
  locationNames: { label: "Nuoro", href: "nuoro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["nuoro"],
      name: "Nuoro",
  }),
});
