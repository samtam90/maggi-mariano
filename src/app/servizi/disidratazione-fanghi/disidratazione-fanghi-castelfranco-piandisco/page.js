import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Castelfranco Piandiscò",
  canonical: links.servizi["disidratazione-fanghi"]["castelfranco-piandisco"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Castelfranco Piandiscò",
  locationNames: { label: "Castelfranco Piandiscò", href: "castelfranco-piandisco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
