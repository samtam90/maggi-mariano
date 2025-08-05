import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Anghiari",
  canonical: links.servizi["disidratazione-fanghi"]["anghiari"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Anghiari",
  locationNames: { label: "Anghiari", href: "anghiari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
