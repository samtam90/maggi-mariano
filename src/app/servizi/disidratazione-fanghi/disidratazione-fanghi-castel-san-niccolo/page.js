import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Castel San Niccolò",
  canonical: links.servizi["disidratazione-fanghi"]["castel-san-niccolo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Castel San Niccolò",
  locationNames: { label: "Castel San Niccolò", href: "castel-san-niccolo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
