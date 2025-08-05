import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Bucine",
  canonical: links.servizi["disidratazione-fanghi"]["bucine"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Bucine",
  locationNames: { label: "Bucine", href: "bucine" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
