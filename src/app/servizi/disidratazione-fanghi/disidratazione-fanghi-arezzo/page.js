import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Arezzo",
  canonical: links.servizi["disidratazione-fanghi"]["arezzo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Arezzo",
  locationNames: { label: "Arezzo", href: "arezzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
