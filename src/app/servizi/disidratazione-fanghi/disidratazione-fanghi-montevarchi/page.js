import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Montevarchi",
  canonical: links.servizi["disidratazione-fanghi"]["montevarchi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Montevarchi",
  locationNames: { label: "Montevarchi", href: "montevarchi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
