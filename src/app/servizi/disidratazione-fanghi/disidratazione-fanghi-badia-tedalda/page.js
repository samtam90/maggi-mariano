import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Badia Tedalda",
  canonical: links.servizi["disidratazione-fanghi"]["badia-tedalda"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Badia Tedalda",
  locationNames: { label: "Badia Tedalda", href: "badia-tedalda" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
