import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Sestino",
  canonical: links.servizi["disidratazione-fanghi"]["sestino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Sestino",
  locationNames: { label: "Sestino", href: "sestino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
